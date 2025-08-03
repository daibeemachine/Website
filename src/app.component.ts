import { Component } from '@angular/core';
import { HomeComponent } from "./app/home/home.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'Website';
}
