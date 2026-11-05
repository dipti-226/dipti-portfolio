import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Reveal } from './shared/reveal';
import { ResumeViewer } from './shared/resume-viewer/resume-viewer';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, Projects, Skills, About, Contact, Reveal, ResumeViewer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}