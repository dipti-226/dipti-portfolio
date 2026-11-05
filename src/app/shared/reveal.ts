import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

// Fades a section in the first time it scrolls into view.
// Content stays fully visible if the user prefers reduced motion
// or the browser has no IntersectionObserver.
@Directive({
  selector: '[appReveal]',
})
export class Reveal {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion || !('IntersectionObserver' in window)) {
        return;
      }

      this.el.classList.add('reveal');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.el.classList.add('reveal-in');
            observer.disconnect();
          }
        },
        { threshold: 0.05 },
      );

      observer.observe(this.el);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}