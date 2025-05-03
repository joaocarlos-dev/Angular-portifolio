import { Component, Input } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-middle-content',
  imports: [AboutComponent, ExperienceComponent, CommonModule],
  templateUrl: './middle-content.component.html',
  styleUrl: './middle-content.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '400ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 }),
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 }),
        ),
      ]),
    ]),
  ],
})
export class MiddleContentComponent {
  @Input() activeSection:
    | 'about'
    | 'experience'
    | 'projects'
    | 'contact'
    | 'resume' = 'about';

  setSection(section: typeof this.activeSection) {
    this.activeSection = section;
  }
}
