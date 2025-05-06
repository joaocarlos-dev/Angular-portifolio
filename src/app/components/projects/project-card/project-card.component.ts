// project-card.component.ts
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { GithubReadmeService } from '../../../services/github-service';
import { CommonModule, NgFor } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  imports: [CommonModule, MarkdownModule, NgFor],

  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ProjectCardComponent {
  selectedCard: number | null = null;
  readmeContent: string = '';
  loadingReadme = false;

  constructor(
    private languageService: LanguageService,
    private githubReadmeService: GithubReadmeService,
  ) {}

  ptCards = [
    {
      title: 'Projeto 1',
      content:
        'Breve descrição do projeto, teste escrevendo um textão pra ver se funciona',
      repoUser: 'joaocarlos-dev',
      repoName: 'AgendaTelefonica',
      technologies: ['Angular', 'Python'],
    },
    {
      title: 'Projeto 2',
      content: 'Breve descrição do projeto.',
      repoUser: 'joaocarlos-dev',
      repoName: 'Angular-portifolio',
      technologies: ['Angular', 'Python'],
    },
    {
      title: 'Projeto 3',
      content: 'Breve descrição do projeto.',
      repoUser: 'joaocarlos-dev',
      repoName: 'Angular-portifolio',
      technologies: ['Angular', 'Python'],
    },
  ];

  enCards = [
    {
      title: 'Project 1',
      content: 'Short project description.',
      repoUser: 'joaocarlos-dev',
      repoName: 'AgendaTelefonica',
      technologies: ['Angular', 'Python'],
    },
    {
      title: 'Project 2',
      content: 'Short project description.',
      repoUser: 'joaocarlos-dev',
      repoName: 'Angular-portifolio',
      technologies: ['Angular', 'Python'],
    },
    {
      title: 'Project 3',
      content: 'Short project description.',
      repoUser: 'joaocarlos-dev',
      repoName: 'Angular-portifolio',
      technologies: ['Angular', 'Python'],
    },
  ];

  get cards() {
    return this.languageService.isPortuguese() ? this.ptCards : this.enCards;
  }

  openModal(index: number) {
    this.selectedCard = index;
    const card = this.cards[index];
    this.readmeContent = '';
    this.loadingReadme = true;

    console.log('Buscando README para:', card.repoUser, card.repoName);

    this.githubReadmeService.getReadme(card.repoUser, card.repoName).subscribe({
      next: (data) => {
        console.log('Tipo de data:', typeof data, data);
        console.log('README carregado:', data.substring(0, 100));
        this.readmeContent = data;
        this.loadingReadme = false;
      },
      error: (err) => {
        console.error('Erro ao buscar README:', err);
        this.readmeContent = 'Erro ao carregar README.md';
        this.loadingReadme = false;
      },
    });
  }

  closeModal() {
    this.selectedCard = null;
    this.readmeContent = '';
  }
}
