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
        this.setLanguageContent(); // Atualiza o conteúdo sempre que o idioma mudar
      });

    this.setLanguageContent(); // Inicializa o conteúdo ao carregar o componente
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe(); // Evita vazamentos de memória
    }
  }

  setLanguageContent() {
    if (this.languageService.isPortuguese()) {
      this.greeting = 'Olá, sou o João!';
      this.paragraphs = `
        Sou formado em Análise e Desenvolvimento de Sistemas pela FATEC de Ribeirão Preto. Atualmente, trabalho como Analista de Suporte e Desenvolvedor na INOV.AI, uma empresa que oferece soluções jurídicas com base em inteligência artificial.

        Tenho experiência com Python, análise de dados e prevenção de falhas em sistemas. Também trabalho com tecnologias como Kubernetes, MongoDB e PostgreSQL, sempre buscando entregar soluções escaláveis e bem documentadas.

        Sou apaixonado por resolver problemas, constantemente buscando novos desafios e oportunidades para aprender. Fora do trabalho, gosto de resolver cubos mágicos, participar de maratonas de programação e tocar violino.
      `
        .split('\n')
        .filter((p) => p.trim() !== '');
    } else {
      this.greeting = `Hello, I'm João!`;
      this.paragraphs = `
        I’m a graduate in Analysis and Systems Development from FATEC in Ribeirão Preto. Currently, I work as a Support Analyst and Developer at INOV.AI, a company that provides legal solutions based on artificial intelligence.

        I have experience with Python, data analysis, and system failure prevention. I also work with technologies such as Kubernetes, MongoDB, and PostgreSQL, always aiming to deliver scalable and well-documented solutions.

        I am passionate about solving problems, constantly seeking new challenges and opportunities to learn. Outside of work, I enjoy solving Rubik's Cube, participating in programming marathons, and playing the violin.
      `
        .split('\n')
        .filter((p) => p.trim() !== '');
    }
  }
}
