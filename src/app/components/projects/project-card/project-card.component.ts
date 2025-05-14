import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { CommonModule, NgFor } from '@angular/common';

import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  imports: [CommonModule, NgFor],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'scale(0.9)' }),
        ),
      ]),
    ]),
  ],
})
export class ProjectCardComponent {
  selectedCard: number | null = null;

  constructor(private languageService: LanguageService) {}

  ptCards = [
    {
      title: 'Portfólio',
      short_description:
        'Meu site pessoal com portfólio, informações e projetos.',
      content: `
## Sobre o Projeto

Este é meu site pessoal desenvolvido com Angular e Tailwind. Ele serve para contar sobre mim, minhas experiências profissionais e meus projetos pessoais.

### Funcionalidades

- Exibição dos meus projetos principais
- Informações sobre mim e minhas especialidades
- Links para redes sociais
- Design responsivo adaptado para dispositivos móveis e desktops

### Tecnologias Utilizadas

- Angular para a estrutura do frontend
- TailwindCSS para estilização
- TypeScript como linguagem principal
    `,
      technologies: ['Angular', 'Tailwind', 'HTML', 'TypeScript'],
      link: 'https://github.com/Ja1zinh0/Angular-portifolio',
    },
    {
      title: 'Projeto em Construção',
      short_description: 'Este projeto ainda está sendo desenvolvido.',
      content:
        'Este projeto ainda está em construção. Em breve, mais detalhes serão adicionados.',
      technologies: ['Em breve'],
      link: '',
    },
    {
      title: 'Projeto em Construção',
      short_description: 'Este projeto ainda está sendo desenvolvido.',
      content:
        'Este projeto ainda está em construção. Em breve, mais detalhes serão adicionados.',
      technologies: ['Em breve'],
      link: '',
    },
  ];

  enCards = [
    {
      title: 'Portfolio',
      short_description:
        'My personal website with portfolio, info and projects.',
      content: `
## About the Project

This is my personal website built with Angular and Tailwind. It serves as a portfolio and a showcase of my skills and experience.

### Features

- Showcases my main projects
- Contains information about me and my skills
- Links to social media
- Responsive design for mobile and desktop

### Technologies Used

- Angular for frontend structure
- TailwindCSS for styling
- TypeScript as the main language

### Purpose

To create an online space where recruiters, colleagues or anyone interested can check out my work and ongoing projects.
      `,
      technologies: ['Angular', 'Tailwind', 'HTML', 'TypeScript'],
      link: 'https://github.com/Ja1zinh0/Angular-portifolio',
    },
    {
      title: 'Project in Progress',
      short_description: 'This project is still under development.',
      content:
        'This project is still in progress. More details will be added soon.',
      technologies: ['Soon'],
      link: '',
    },
    {
      title: 'Project in Progress',
      short_description: 'This project is still under development.',
      content:
        'This project is still in progress. More details will be added soon.',
      technologies: ['Soon'],
      link: '',
    },
  ];

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.closeModal();
  }

  get cards() {
    return this.languageService.isPortuguese() ? this.ptCards : this.enCards;
  }

  // Adicione esta variável para controle do modal
  isModalOpen = false;

  // Modifique os métodos de abertura/fechamento
  openModal(index: number) {
    this.selectedCard = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.selectedCard = null;
    this.isModalOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isModalOpen) {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent && !modalContent.contains(event.target as Node)) {
        this.closeModal();
      }
    }
  }
}
