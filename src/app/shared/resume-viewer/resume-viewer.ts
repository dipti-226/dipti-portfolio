import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PORTFOLIO } from '../../data/portfolio.data';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume-viewer',
  templateUrl: './resume-viewer.html',
  styleUrl: './resume-viewer.css',
})
export class ResumeViewer {
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly resumeUrl = PORTFOLIO.profile.resumeUrl;
  protected readonly fileName = 'Dipti_Dake_Resume.pdf';

  // The address is a fixed file from our own site, so it is safe to trust.
  protected readonly viewerUrl: SafeResourceUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `${PORTFOLIO.profile.resumeUrl}#toolbar=0&navpanes=0&view=FitH`,
  );

  // The PDF is only loaded while the viewer is open
  protected readonly opened = signal(false);
  protected readonly embed = signal(true);

  constructor() {
    inject(ResumeService).register(() => this.open());
  }

  private open(): void {
    this.embed.set(this.canEmbed());
    this.opened.set(true);
    this.dialog().nativeElement.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  // Runs on Esc, the Close button or a click outside the window
  protected onClosed(): void {
    this.opened.set(false);
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }

  // Phones and some browsers cannot show a PDF inside a page reliably
  private canEmbed(): boolean {
    const pdfSupported =
      (navigator as Navigator & { pdfViewerEnabled?: boolean }).pdfViewerEnabled !== false;
    const phone = window.matchMedia('(pointer: coarse) and (max-width: 820px)').matches;
    return pdfSupported && !phone;
  }
}