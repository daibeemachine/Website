import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BeesComponent } from './app/bees/bees.component';


export const routeConfig: Routes =
[
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'bees',
    component: BeesComponent,
    title: 'Home page'
  }
];
