import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [CommonModule, RouterModule, PortalModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  private menu = document.querySelector('.pages');
  private opened = false;
  public slideMenu()
  {
    var menu = document.querySelector('.pages');
    this.opened = !this.opened;
    menu?.setAttribute('style', 'transform: translateX(-75%); transition: transform 200ms');
    if(this.opened)
    {
      menu?.setAttribute('style', 'transform: translateX(0%); transition: transform 200ms');
    }
  }
}
