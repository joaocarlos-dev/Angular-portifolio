import { Component } from '@angular/core';

import { ExperienceCardComponent } from './experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {}
