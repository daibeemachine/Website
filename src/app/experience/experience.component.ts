import { Component} from '@angular/core';
import { ExperienceHtml } from '../experience-html/experience-html';
import { ExperiencePdf } from '../experience-pdf/experience-pdf';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [ExperienceHtml, ExperiencePdf],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  // Mode 0 is the HTML view, mode 1 is the PDF view
  mode = 0;
  switchView() {
    this.mode = (this.mode+1) % 2;
  }


  constructor()
  {
    const icon = document.getElementById("siteicon");
    icon?.setAttribute("href", "images/ExperienceIcon.png");
  }
  // Source - https://stackoverflow.com/a/58363499
// Posted by Rahmat Ali
// Retrieved 2026-07-16, License - CC BY-SA 4.0

  // called after pdf page is rendered

}
