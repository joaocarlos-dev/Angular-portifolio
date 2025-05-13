import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CurriculumComponent } from '../curriculum/curriculum.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-middle-content',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    CurriculumComponent,
    ContactComponent,
  ],
  templateUrl: './middle-content.component.html',
  styleUrl: './middle-content.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MiddleContentComponent implements OnChanges {
  @Input() activeSection:
    | 'about'
    | 'experience'
    | 'projects'
    | 'contact'
    | 'resume' = 'about';

  visibleSection:
    | 'about'
    | 'experience'
    | 'projects'
    | 'contact'
    | 'resume'
    | null = this.activeSection;

  animating = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['activeSection'] &&
      changes['activeSection'].currentValue !== this.visibleSection &&
      !this.animating
    ) {
      this.animating = true;

      this.visibleSection = null;

      setTimeout(() => {
        this.visibleSection = this.activeSection;
        this.animating = false;
      }, 300);
    }
  }
}
