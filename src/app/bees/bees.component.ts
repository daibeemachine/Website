import { Component } from '@angular/core';

@Component({
  selector: 'app-bees',
  imports: [],
  templateUrl: './bees.component.html',
  styleUrl: './bees.component.scss'
})
export class BeesComponent {
  public flipBee() {
    var bee = document.querySelector('#flip');
    bee?.setAttribute('style', 'transform: rotateX(360deg); transition: transform 500ms');
    setTimeout(() => { bee?.setAttribute('style', ''); }, 500);
  }

  public spinBee() {
    var bee = document.querySelector('#spin');
    bee?.setAttribute('style', 'transform: rotate(-360deg); transition: transform 500ms');
    setTimeout(() => { bee?.setAttribute('style', ''); }, 500);
  }

  public squishBee() {
    var bee = document.querySelector('#squish');
    bee?.setAttribute('style', 'transform: translateY(-100%); transition: transform 300ms ease-out');
    setTimeout(() => { bee?.setAttribute('style', 'transform: translateY(0); transition: transform 300ms ease-in;'); }, 300);
  }

}
