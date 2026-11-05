import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);

  protected readonly theme = this.themeService.theme;

  protected toggle(): void {
    this.themeService.toggle();
  }
}