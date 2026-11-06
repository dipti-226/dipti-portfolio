import {Component,DestroyRef,ElementRef,afterNextRender,inject,input,signal,viewChild,} from '@angular/core';

// A horizontal row that scrolls with swipe, mouse wheel, keyboard or arrow buttons.
// Put any cards inside it:  <app-scroller label="projects"> ...cards... </app-scroller>
// The arrow buttons only appear when the cards do not all fit on the screen.
@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.html',
  styleUrl: './scroller.css',
})
export class Scroller {
  // Used in the accessible names, for example "Previous projects"
  readonly label = input.required<string>();

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  private readonly destroyRef = inject(DestroyRef);

  protected readonly overflowing = signal(false);
  protected readonly canPrev = signal(false);
  protected readonly canNext = signal(false);

  constructor() {
    afterNextRender(() => {
      this.update();

      if (!('ResizeObserver' in window)) {
        return;
      }

      // Recalculate when the screen size or the number of cards changes
      const element = this.track().nativeElement;
      const observer = new ResizeObserver(() => this.update());
      observer.observe(element);
      for (const child of Array.from(element.children)) {
        observer.observe(child);
      }
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  // Works out if there is more to scroll and which arrows are active
  protected update(): void {
    const element = this.track().nativeElement;
    const maxScroll = element.scrollWidth - element.clientWidth;

    this.overflowing.set(maxScroll > 1);
    this.canPrev.set(element.scrollLeft > 1);
    this.canNext.set(element.scrollLeft < maxScroll - 1);
  }

  // Moves by one card
  protected move(direction: 1 | -1): void {
    const element = this.track().nativeElement;
    const firstCard = element.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    const step = firstCard ? firstCard.offsetWidth + gap : element.clientWidth;

    // Smooth scrolling is set in the CSS, and it is switched off for "reduce motion"
    element.scrollBy({ left: direction * step });
  }
}