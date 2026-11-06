import { Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { PORTFOLIO, Project } from '../../data/portfolio.data';
import { Scroller } from '../../shared/scroller/scroller';
import { ProjectStudy } from './project-study/project-study';
@Component({
  selector: 'app-projects',
  imports: [Scroller, ProjectStudy],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = PORTFOLIO.projects;

  // The "Explore more" pop-up
  private readonly study = viewChild.required(ProjectStudy);

  // Reference to the screenshot <dialog> element in the template
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('gallery');

  // Which project's gallery is open, and which picture is showing
  protected readonly current = signal<Project | null>(null);
  protected readonly index = signal(0);

  protected readonly shot = computed(() => {
    const project = this.current();
    return project ? project.screenshots[this.index()] : null;
  });

  protected openStudy(project: Project): void {
    this.study().open(project);
  }

  protected openGallery(project: Project, startAt = 0): void {
    this.current.set(project);
    this.index.set(startAt);
    this.dialog().nativeElement.showModal();
  }

  protected closeGallery(): void {
    this.dialog().nativeElement.close();
  }

  // Called when the dialog closes (Esc key, close button or backdrop click)
  protected onClosed(): void {
    this.current.set(null);
  }

  protected next(): void {
    const project = this.current();
    if (!project) return;
    this.index.update((i) => (i + 1) % project.screenshots.length);
  }

  protected prev(): void {
    const project = this.current();
    if (!project) return;
    const total = project.screenshots.length;
    this.index.update((i) => (i - 1 + total) % total);
  }

  protected onKey(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }

  // Clicking the dark area outside the picture closes the gallery
  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.closeGallery();
    }
  }
}