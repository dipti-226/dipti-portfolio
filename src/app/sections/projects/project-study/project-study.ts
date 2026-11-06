import { Component, ElementRef, output, signal, viewChild } from '@angular/core';
import { Project } from '../../../data/portfolio.data';

// The "Explore more" pop-up. The Projects component opens it with open(project).
@Component({
  selector: 'app-project-study',
  templateUrl: './project-study.html',
  styleUrl: './project-study.css',
})
export class ProjectStudy {
  // Tells the Projects component to open the screenshot gallery at this picture
  readonly openShot = output<{ project: Project; index: number }>();

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly scrollArea = viewChild.required<ElementRef<HTMLElement>>('scrollArea');

  protected readonly project = signal<Project | null>(null);

  open(project: Project): void {
    this.project.set(project);
    this.scrollArea().nativeElement.scrollTop = 0;
    this.dialog().nativeElement.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  // Called on Esc, the close button or a click outside the window
  protected onClosed(): void {
    this.project.set(null);
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }
}