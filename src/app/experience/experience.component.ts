import { Component, inject} from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import CV from '../../CV.json';

@Component({
  selector: 'app-experience',
  imports: [PdfViewerModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  sections = CV.sections;

  envelopeIcon = faEnvelope;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  phoneIcon = faPhone;

  constructor()
  {
    const icon = document.getElementById("siteicon");
    icon?.setAttribute("href", "images/ExperienceIcon.png");
  }
  source = "https://raw.githubusercontent.com/daibeemachine/Resume/162ff3b7ae7f4c68216b55fcfe6d2404fe7c1f5a/main.pdf";
}
