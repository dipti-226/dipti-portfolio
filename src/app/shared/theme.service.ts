import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

// Holds the current theme and saves the visitor's choice in the browser.
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.readCurrent());

  constructor() {
    this.apply(this.theme());
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.apply(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Private mode can block storage. The theme still works for this visit.
    }
  }

  // index.html sets data-theme before the page paints, so we just read it
  private readCurrent(): Theme {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  private apply(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f6f8fc' : '#0b1220');
  }
}