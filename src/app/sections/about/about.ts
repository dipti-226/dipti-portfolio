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
    ...PORTFOLIO.certifications.map((title) => ({ type: 'Certification', title })),
    ...PORTFOLIO.achievements.map((title) => ({ type: 'Achievement', title })),
  ];
}