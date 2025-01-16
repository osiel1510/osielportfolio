import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})

export class CardProjectComponent {
  @Input() img!:string;
  @Input() title!: string;
  @Input() classColor!: string;
  @Input() link!: string;
  @Input() description!: string;
  @Input() sameSite!:boolean;
  @Input() technologies!:string[];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
