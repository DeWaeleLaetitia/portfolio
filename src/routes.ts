import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { DetailsComponent } from './app/details/details.component';
import { AllProjectsComponent } from './app/all-projects/all-projects.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Laetitia De Waele'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details'
  },
  {
    path: 'work',
    component: AllProjectsComponent,
    title: 'Work'
  }
];

export default routeConfig;