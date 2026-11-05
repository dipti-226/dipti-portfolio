import { Injectable } from '@angular/core';

// Lets any button open the resume viewer without knowing where it lives.
@Injectable({ providedIn: 'root' })
export class ResumeService {
  private opener: (() => void) | null = null;

  register(opener: () => void): void {
    this.opener = opener;
  }

  open(): void {
    this.opener?.();
  }
}