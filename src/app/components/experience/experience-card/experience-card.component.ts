import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  cards = [
    {
      title: 'Experiência A',
      time: '24/02/2024',
      company: 'Empresa1',
      content: 'Fiz tal coisa bla bla bla 1',
      technologies: ['Angular', 'TypeScript', 'Tailwind'],
      isOpen: false,
    },
    {
      title: 'Experiência B',
      time: '24/02/2024',
      company: 'empresa2',
      content: 'Fiz tal coisa bla bla bla 2',
      technologies: ['React', 'Node.js', 'Docker'],
      isOpen: false,
    },
    {
      title: 'Experiência C',
      time: '24/02/2024',
      company: 'empresa2',
      content: 'Fiz tal coisa bla bla bla 3',
      technologies: ['Vue.js', 'Firebase', 'CSS'],
      isOpen: false,
    },
    {
      title: 'Experiência D',
      time: '24/02/2024',
      company: 'empresa2',
      content: 'Fiz tal coisa bla bla bla 4',
      technologies: ['Python', 'Django', 'Postgres'],
      isOpen: false,
    },
  ];

  toggleCard(index: number) {
    this.cards[index].isOpen = !this.cards[index].isOpen;
  }
}
