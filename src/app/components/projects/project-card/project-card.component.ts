import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { CommonModule, NgFor } from '@angular/common';

import { trigger, transition, style, animate } from '@angular/animations';

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
      title: 'The Blog',
      short_description:
        'Blog pessoal fullstack desenvolvido com foco educacional.',
      content: `
## Sobre o Projeto

**The Blog** é um blog pessoal desenvolvido como plataforma de aprendizado fullstack. O projeto visa explorar tecnologias modernas e práticas de desenvolvimento como autenticação, CRUD e testes automatizados.

### Funcionalidades Planejadas

- Autenticação de usuários
- Cadastro, edição e exclusão de posts (CRUD)
- Página individual para cada post
- Design responsivo
- Testes automatizados com Vitest e Playwright

### Tecnologias Utilizadas

- **Frontend:** React, Next.js
- **Backend:** NestJS, Node.js
- **Banco de Dados:** SQLite
- **Testes:** Vitest, Playwright
      `,
      technologies: [
        'React',
        'Next.js',
        'NestJS',
        'Node.js',
        'SQLite',
        'Vitest',
        'Playwright',
      ],
      link: 'https://github.com/joaocarlos-dev/blog-project',
    },
    {
      title: 'AlgVis',
      short_description:
        'Projeto fullstack para visualização de algoritmos de estruturas de dados.',
      content: `
## Sobre o Projeto

O **AlgVis** é um site educacional desenvolvido com foco em ensinar algoritmos e estruturas de dados de forma visual. Ele permite ao usuário selecionar algoritmos como Bubble Sort, Quick Sort e ver passo a passo como eles se comportam através de animações.

### Funcionalidades

- Visualização animada de algoritmos de ordenação
- Geração de números aleatórios a cada execução
- Navegação entre algoritmos por categorias
- Design responsivo e intuitivo
- Integração entre backend e frontend para controle da execução

### Tecnologias Utilizadas

- **Frontend:** React, Next.js, TypeScript, TailwindCSS
- **Backend:** Python, FastAPI

### Objetivo

Auxiliar estudantes e desenvolvedores iniciantes a compreenderem melhor os algoritmos clássicos através de uma experiência visual e interativa.
      `,
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Python',
        'FastAPI',
      ],
      link: 'https://github.com/joaocarlos-dev/AlgVis',
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
      `,
      technologies: ['Angular', 'Tailwind', 'HTML', 'TypeScript'],
      link: 'https://github.com/Ja1zinh0/Angular-portifolio',
    },

    {
      title: 'AlgVis',
      short_description:
        'Fullstack project for visualizing data structures and algorithms.',
      content: `
## About the Project

**AlgVis** is an educational website designed to teach data structures and algorithms through visual interaction. It allows users to explore how sorting algorithms like Bubble Sort and Quick Sort behave step-by-step via animations.

### Features

- Animated visualization of sorting algorithms
- Random number generation on each run
- Navigation between algorithms by category
- Responsive and intuitive interface
- Frontend-backend integration for controlling execution

### Technologies Used

- **Frontend:** React, Next.js, TypeScript, TailwindCSS
- **Backend:** Python, FastAPI

### Purpose

To help students and junior developers better understand classical algorithms through an interactive and visual experience.
      `,
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Python',
        'FastAPI',
      ],
      link: 'https://github.com/joaocarlos-dev/AlgVis',
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

  isModalOpen = false;

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
