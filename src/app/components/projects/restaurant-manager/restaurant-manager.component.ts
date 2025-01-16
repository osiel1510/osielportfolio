import { Component } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { TranslatePipe } from '@ngx-translate/core';
import { BackgroundAnimationComponent } from "../../background-animation/background-animation.component";

@Component({
  selector: 'app-restaurant-manager',
  standalone: true,
  imports: [CardProjectComponent, TranslatePipe, BackgroundAnimationComponent],
  templateUrl: './restaurant-manager.component.html',
  styleUrl: './restaurant-manager.component.css'
})
export class RestaurantManagerComponent {

}
