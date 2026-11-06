import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { ResumeLink } from '../../shared/resume-link';

// The part of the headline that is shown in the accent colour.
// It must match the words in profile.headline exactly, or no word is coloured.
const HIGHLIGHT = 'secure, role-based web apps';

@Component({
  selector: 'app-hero',
  imports: [ResumeLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly profile = PORTFOLIO.profile;
  protected readonly social = PORTFOLIO.social;

  // Small card on the photo. Change the job title text here if you want.
  protected readonly jobTitle = 'Software Developer';
  protected readonly linkedin = PORTFOLIO.social.find((item) => item.label === 'LinkedIn');

  protected readonly facts = [
    { value: '2', label: 'Full-stack projects built' },
    { value: '34', label: 'Stored procedures in DeskPilot' },
    { value: 'CI/CD', label: 'GitHub Actions to IIS' },
  ];

  // Splits the headline into three parts so the middle one can be coloured
  protected readonly headline = this.splitHeadline(PORTFOLIO.profile.headline);

  protected isExternal(url: string): boolean {
    return url.startsWith('http');
  }

  private splitHeadline(text: string): { before: string; match: string; after: string } {
    const index = text.indexOf(HIGHLIGHT);
    if (index === -1) {
      return { before: text, match: '', after: '' };
    }
    return {
      before: text.slice(0, index),
      match: HIGHLIGHT,
      after: text.slice(index + HIGHLIGHT.length),
    };
  }
}