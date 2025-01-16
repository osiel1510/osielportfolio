import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { RestaurantManagerComponent } from './components/projects/restaurant-manager/restaurant-manager.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'restaurant-manager', component: RestaurantManagerComponent }
];
