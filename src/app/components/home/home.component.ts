import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { BackgroundAnimationComponent } from '../background-animation/background-animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileComponent, ProjectsComponent, TimelineComponent, BackgroundAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
