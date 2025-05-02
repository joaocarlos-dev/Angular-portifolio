import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {
  cards = [
    {
      title: 'Experiência A',
      time: '24/02/2024',
      company: 'Empresa1',
      content: 'Fiz tal coisa bla bla bla 1',
      isOpen: false,
    },
    {
      title: 'Experiência B',
      time: '24/02/2024',
      company: 'empresa2',
      content: 'Fiz tal coisa bla bla bla 2',
      isOpen: false,
    },
  ];

  toggleCard(index: number) {
    this.cards[index].isOpen = !this.cards[index].isOpen;
  }
}
