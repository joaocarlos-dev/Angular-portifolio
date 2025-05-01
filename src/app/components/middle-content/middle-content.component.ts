import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-middle-content',
  imports: [AboutComponent, ExperienceComponent],
  templateUrl: './middle-content.component.html',
  styleUrl: './middle-content.component.scss',
})
export class MiddleContentComponent {}
