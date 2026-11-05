import { Component, DestroyRef, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { ResumeLink } from '../../shared/resume-link';
import { ThemeToggle } from '../../shared/theme-toggle/theme-toggle';

interface NavLink {
  label: string;
  id: string;
}

@Component({
  selector: 'app-header',
  imports: [ResumeLink, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly name = PORTFOLIO.profile.name;
  protected readonly resumeUrl = PORTFOLIO.profile.resumeUrl;

  protected readonly links: NavLink[] = [
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  // Signals: small reactive values the template reads
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly active = signal('home');

  constructor() {
    // Runs once, after the page is drawn in the browser
    afterNextRender(() => {
      this.onScroll();
      this.observeSections();
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);

    // At the very bottom of the page, the last link (Contact) should be active
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (atBottom && window.scrollY > 0) {
      this.active.set('contact');
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 760) {
      this.menuOpen.set(false);
    }
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  // Scroll-spy: watches which section is in the middle of the screen
  private observeSections(): void {
    const ids = ['home', ...this.links.map((link) => link.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.active.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}