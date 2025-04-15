import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-rightside',
  imports: [AboutComponent, ExperienceComponent],
  templateUrl: './rightside.component.html',
  styleUrl: './rightside.component.scss',
})
export class RightsideComponent {}
