import { Component} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling'
import {MatGridListModule} from '@angular/material/grid-list'
import data from '../../portfolio_items.json';
@Component({
  selector: 'app-portfolio',
  imports: [ScrollingModule, MatGridListModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  cards = data.info;
  public test()
  {
    console.log(data.info.length);
  }

  public spinBee()
  {
    var bee = document.querySelector('.daibee');
    bee?.setAttribute('style', 'transform: rotate(-360deg); transition: transform 500ms');
    setTimeout(() => { bee?.setAttribute('style', ''); }, 500);
  }
}
