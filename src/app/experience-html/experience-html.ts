import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import CV from '../../CV.json';

@Component({
  selector: 'app-experience-html',
  imports: [FontAwesomeModule],
  templateUrl: './experience-html.html',
  styleUrl: './experience-html.scss',
})
export class ExperienceHtml {
  sections = CV.sections;

  envelopeIcon = faEnvelope;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  phoneIcon = faPhone;

}
