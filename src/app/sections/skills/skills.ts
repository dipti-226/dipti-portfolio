import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly groups = PORTFOLIO.skills;

  // Highlighted at the top. Change this list to highlight different skills.
  protected readonly core = [
    'C#',
    'ASP.NET Core Web API',
    'ADO.NET',
    'SQL Server',
    'Angular',
    'JWT Authentication',
  ];

  // ---------- Sideways scrolling for the skill cards ----------
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  private readonly destroyRef = inject(DestroyRef);

  protected readonly overflowing = signal(false); // are there cards off-screen?
  protected readonly canPrev = signal(false); // is there more to the left?
  protected readonly canNext = signal(false); // is there more to the right?

  constructor() {
    afterNextRender(() => {
      const el = this.track().nativeElement;

      // Re-check whenever the row or its cards change size (for example when the window is resized)
      const resize = new ResizeObserver(() => this.update());
      resize.observe(el);
      Array.from(el.children).forEach((child) => resize.observe(child));

      this.update();
      this.destroyRef.onDestroy(() => resize.disconnect());
    });
  }

  protected update(): void {
    const el = this.track().nativeElement;
    const max = el.scrollWidth - el.clientWidth;
    this.overflowing.set(max > 2);
    this.canPrev.set(el.scrollLeft > 2);
    this.canNext.set(el.scrollLeft < max - 2);
  }

  protected scrollPage(direction: 1 | -1): void {
    const el = this.track().nativeElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({
      left: direction * Math.max(el.clientWidth * 0.8, 240),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }
}