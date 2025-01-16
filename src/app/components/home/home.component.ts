import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileComponent, ProjectsComponent, TimelineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
