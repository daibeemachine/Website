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

  private opened = false;
  public slideMenu()
  {
    var menu = document.querySelector('.pages');

    var menuIcon = document.querySelector('.menu');
    if(menuIcon == null) menuIcon = document.querySelector('.disabled_menu');

    var closeIcon = document.querySelector('.close');
    if(closeIcon == null) closeIcon = document.querySelector('.close_opened');

    this.opened = !this.opened;
    menu?.setAttribute('style', 'transform: translateX(-75%) translateY(-50%); transition: transform 200ms');
    menuIcon?.setAttribute('class', 'menu');
    closeIcon?.setAttribute('class', 'close');

    if(this.opened)
    {
      menu?.setAttribute('style',
        'transform: translateX(0%) translateY(-50%); transition: transform 200ms;');
      closeIcon?.setAttribute('class', `close_opened`);
      menuIcon?.setAttribute('class', 'disabled_menu');
    }
  }
}
