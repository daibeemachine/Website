import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';
import data from '../../portfolio_items.json'


@Component({
  selector: 'app-portfolio',
  imports: [PortfolioCardComponent],
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
