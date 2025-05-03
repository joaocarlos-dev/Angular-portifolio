import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-middle-content',
  standalone: true,
  imports: [CommonModule, AboutComponent, ExperienceComponent],
  templateUrl: './middle-content.component.html',
  styleUrl: './middle-content.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 })),
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

  visibleSection = this.activeSection;
  isFadingOut = false;

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['activeSection'] &&
      changes['activeSection'].currentValue !== this.visibleSection
    ) {
      this.isFadingOut = true;

      // Aguarda o tempo da animação de fadeOut (500ms)
      setTimeout(() => {
        this.visibleSection = this.activeSection;
        this.isFadingOut = false;
      }, 200);
    }
  }
}
