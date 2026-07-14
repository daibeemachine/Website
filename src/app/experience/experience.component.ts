import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer'

@Component({
  selector: 'app-experience',
  imports: [PdfViewerModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  constructor()
  {
    const icon = document.getElementById("siteicon");
    icon?.setAttribute("href", "images/ExperienceIcon.png");
  }
  source = "https://raw.githubusercontent.com/daibeemachine/Resume/162ff3b7ae7f4c68216b55fcfe6d2404fe7c1f5a/main.pdf";
}
