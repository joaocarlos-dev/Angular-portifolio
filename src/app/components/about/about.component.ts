import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  greeting = `Hello, I'm João!`;

  aboutText = `
    I’m a graduate in Analysis and Systems Development from FATEC in Ribeirão Preto. Currently, I work as a Support Analyst and Developer at INOV.AI, a company that provides legal solutions based on artificial intelligence.

    I have experience with Python, data analysis, and system failure prevention. I also work with technologies such as Kubernetes, MongoDB, and PostgreSQL, always aiming to deliver scalable and well-documented solutions.

    I am passionate about solving problems, constantly seeking new challenges and opportunities to learn. Outside of work, I enjoy solving Rubik's Cube puzzles, participating in programming marathons, and playing the violin.
  `;

  paragraphs = this.aboutText.split('\n').filter((p) => p.trim() !== '');
}
