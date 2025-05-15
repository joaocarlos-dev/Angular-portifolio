import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  greeting = '';
  paragraphs: string[] = [];
  private languageSubscription: Subscription | null = null; // Inicializa com null

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageSubscription = this.languageService
      .getLanguageObservable()
      .subscribe(() => {
        this.setLanguageContent();
      });

    this.setLanguageContent();
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  setLanguageContent() {
    if (this.languageService.isPortuguese()) {
      this.greeting = 'Olá, sou o João!';
      this.paragraphs = `
      Sou um desenvolvedor fullstack com paixão por resolver problemas complexos e construir soluções inteligentes. Trabalho com Java e Spring Boot no backend, Python para automações e análise de dados, e Angular no frontend, sempre buscando criar aplicações robustas, escaláveis e bem documentadas.

Formado em Análise e Desenvolvimento de Sistemas pela FATEC de Ribeirão Preto, atualmente atuo como Analista de Suporte na INOV.AI, uma empresa focada em soluções jurídicas com inteligência artificial. No meu dia a dia, trabalho com Python, PostgreSQL, MongoDB e outras ferramentas, apoiando a equipe no monitoramento, manutenção e evolução de sistemas.

Fora do ambiente profissional, sou movido por desafios e pela vontade de aprender constantemente. Gosto de competições saudáveis, especialmente maratonas de programação, onde posso testar meus limites e aprender com outros devs. Também curto resolver cubos mágicos e praticar violino.

  
      `
        .split('\n')
        .filter((p) => p.trim() !== '');
    } else {
      this.greeting = `Hello, I'm João!`;
      this.paragraphs = `
      I'm a fullstack developer with a passion for solving complex problems and building smart solutions. I work with Java and Spring Boot on the backend, Python for automation and data analysis, and Angular on the frontend — always aiming to deliver robust, scalable, and well-documented applications.

I hold a degree in Systems Analysis and Development from FATEC in Ribeirão Preto. Currently, I work as a Support Analyst at INOV.AI, a company focused on AI-powered legal solutions. On a daily basis, I use Python, PostgreSQL, MongoDB, and other tools to support the team in system monitoring, maintenance, and continuous improvement.

Outside of work, I'm driven by challenges and a constant desire to learn. I enjoy friendly competition, especially through programming contests, where I can push my limits and grow alongside other developers. I also like solving Rubik’s cubes and playing the violin.
        `
        .split('\n')
        .filter((p) => p.trim() !== '');
    }
  }
}
