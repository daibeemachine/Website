import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BeesComponent } from './app/bees/bees.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { NgModule } from '@angular/core';


export const routeConfig: Routes =
[
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: `Experience`
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Portfolio'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: BeesComponent,
    title: '404'
  }
];

