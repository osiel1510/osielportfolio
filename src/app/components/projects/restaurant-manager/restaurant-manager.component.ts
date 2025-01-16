import { Component } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-restaurant-manager',
  standalone: true,
  imports: [CardProjectComponent, TranslatePipe],
  templateUrl: './restaurant-manager.component.html',
  styleUrl: './restaurant-manager.component.css'
})
export class RestaurantManagerComponent {

}
