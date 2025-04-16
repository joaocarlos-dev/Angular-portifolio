import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface Experience {
  company: string;
  title: string;
  duration: string;
  description: string;
  expanded: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          height: '0px',
          overflow: 'hidden',
          opacity: 0,
        }),
        animate(
          '300ms ease-out',
          style({
            height: '*',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({
            height: '0px',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Inov.ai Tech',
      title: 'Desenvolvedor Fullstack',
      duration: '06/2024 - 02/2025',
      description:
        'Participei de automações com IA, criei pipelines com Python, Node.js e Kubernetes.',
      expanded: false,
    },
    {
      company: 'Unimed',
      title: 'Estagiário em Suporte',
      duration: '01/2023 - 05/2024',
      description: 'Teste de texto',
      expanded: false,
    },
  ];

  toggleDetails(index: number): void {
    this.experiences = this.experiences.map((exp, i) => ({
      ...exp,
      expanded: i === index ? !exp.expanded : false,
    }));
    console.log(this.experiences[index].expanded);
  }
}
