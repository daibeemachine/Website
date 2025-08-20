import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BeesComponent } from './app/bees/bees.component';
import { ExperienceComponent } from './app/experience/experience.component';


export const routeConfig: Routes =
[
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'bees',
    component: BeesComponent,
    title: 'secret bee page!'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: `Experience`
  }
];
