import { Component } from '@angular/core';
import data from '../../portfolio_items.json'


@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  cards = data.info;
  public test()
  {
    console.log(data.info.length);
  }
}
