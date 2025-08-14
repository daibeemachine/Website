import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  constructor()
  {
    const icon = document.getElementById("siteicon");
    icon?.setAttribute("href", "images/ExperienceIcon.png");
  }
}
