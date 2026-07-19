import { Component} from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
{

  public flipBee()
  {
    var bee = document.querySelector('.beemachine');
    bee?.setAttribute('style', 'transform: rotateX(360deg); transition: transform 500ms');
    setTimeout(() => { bee?.setAttribute('style', ''); }, 500);
  }
}
