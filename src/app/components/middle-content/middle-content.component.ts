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

      // Fase 1: faz fadeOut do conteúdo atual
      this.visibleSection = null;

      // Espera a animação de fadeOut terminar
      setTimeout(() => {
        // Fase 2: mostra nova seção e dispara fadeIn
        this.visibleSection = this.activeSection;
        this.animating = false;
      }, 500); // deve ser o mesmo tempo do animate('500ms...')
    }
  }
}
