import { Component } from '@angular/core';
import { CardProjectComponent } from './card-project/card-project.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {

}
