import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import CV from '../../CV.json';

@Component({
  selector: 'app-experience-html',
  imports: [FontAwesomeModule, MatTooltipModule],
  templateUrl: './experience-html.html',
  styleUrl: './experience-html.scss',
})
export class ExperienceHtml {
  sections = CV.sections;

  envelopeIcon = faEnvelope;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  phoneIcon = faPhone;

  public squishBee() {
    var bee = document.querySelector('#squish');
    bee?.setAttribute('style', 'transform: translateY(-100%); transition: transform 300ms ease-out');
    setTimeout(() => { bee?.setAttribute('style', 'transform: translateY(0); transition: transform 300ms ease-in;'); }, 300);
  }
}
