import { Component, OnInit } from '@angular/core';
import {
  TranslatePipe
} from "@ngx-translate/core";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent{

}
