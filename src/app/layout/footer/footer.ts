import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly name = PORTFOLIO.profile.name;
  protected readonly social = PORTFOLIO.social;
  protected readonly year = new Date().getFullYear();

  protected isExternal(url: string): boolean {
    return url.startsWith('http');
  }
}