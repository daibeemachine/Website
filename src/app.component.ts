import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { NavigationBarComponent } from './app/navigation-bar/navigation-bar.component';
import { NavigationBarOptionsComponent } from "./app/navigation-bar-options/navigation-bar-options.component";
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, NavigationBarComponent, CommonModule, PortalModule, NavigationBarOptionsComponent],
})
export class AppComponent {
  title = 'Website';
}
