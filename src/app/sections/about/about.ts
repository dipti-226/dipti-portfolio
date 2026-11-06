import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly paragraphs = PORTFOLIO.about;
  protected readonly experience = PORTFOLIO.experience;
  protected readonly education = PORTFOLIO.education;

  // Certifications and achievements shown together as small cards
  protected readonly highlights = [
    ...PORTFOLIO.certifications.map((item) => ({
      type: 'Certification',
      title: item.title,
      period: item.period,
    })),
    ...PORTFOLIO.achievements.map((title) => ({ type: 'Achievement', title, period: '' })),
  ];
}