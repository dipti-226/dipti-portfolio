import { Directive, inject } from '@angular/core';
import { ResumeService } from './resume.service';
@Directive({
  selector: 'a[appResumeLink]',
  host: { '(click)': 'onClick($event)' },
})
export class ResumeLink {
  private readonly resume = inject(ResumeService);

  onClick(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    event.preventDefault();
    this.resume.open();
  }
}