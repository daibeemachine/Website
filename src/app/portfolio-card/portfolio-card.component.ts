import { Component } from '@angular/core';
import data from '../../portfolio_items.json';


@Component({
  selector: 'app-portfolio-card',
  imports: [],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss'
})
export class PortfolioCardComponent {

  public test()
  {
    console.log(data.info.length);
  }
}
