import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
      company: 'Fatec Ribeirão',
      title: 'Estagiário em Suporte',
      duration: '01/2023 - 05/2024',
      description:
        'Auxiliei na manutenção de sistemas e automatização de relatórios.',
      expanded: false,
    },
  ];

  toggleDetails(index: number): void {
    this.experiences[index].expanded = !this.experiences[index].expanded;
  }
}
