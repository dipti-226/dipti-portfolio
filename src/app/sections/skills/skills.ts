import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly groups = PORTFOLIO.skills;

  // Highlighted at the top. Change this list to highlight different skills.
  protected readonly core = [
    'C#',
    'ASP.NET Core Web API',
    'ADO.NET',
    'SQL Server',
    'Angular',
    'JWT Authentication',
  ];
}