import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PORTFOLIO } from '../../data/portfolio.data';
import { ResumeLink } from '../../shared/resume-link';

type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,ResumeLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly email = PORTFOLIO.profile.email;
  protected readonly resumeUrl = PORTFOLIO.profile.resumeUrl;
  protected readonly links = PORTFOLIO.social.filter((s) => s.label !== 'Email');
  protected readonly maxMessage = 1500;

  protected readonly status = signal<Status>('idle');

  // Time the form appeared. Bots usually submit within a second or two.
  private readonly openedAt = Date.now();

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    message: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(this.maxMessage)],
    ],
    // Honeypot: real people never see or fill this field. Bots often do.
    botcheck: [false],
  });

  protected get f() {
    return this.form.controls;
  }

  // Show an error only after the user has touched the field (or tried to submit)
  protected showError(name: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || control.dirty);
  }

  protected async submit(): Promise<void> {
    if (this.status() === 'sending' || this.status() === 'sent') {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    // Spam checks: honeypot filled, or form submitted impossibly fast.
    // We pretend it worked so bots get no useful feedback.
    const tooFast = Date.now() - this.openedAt < 3000;
    if (value.botcheck || tooFast) {
      this.status.set('sent');
      return;
    }

    this.status.set('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: PORTFOLIO.contact.formAccessKey,
          subject: `Portfolio message from ${value.name.trim()}`,
          from_name: 'Portfolio contact form',
          name: value.name.trim(),
          email: value.email.trim(),
          message: value.message.trim(),
          botcheck: value.botcheck,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        this.status.set('sent');
        this.form.reset();
      } else {
        this.status.set('error');
      }
    } catch {
      this.status.set('error');
    }
  }
}