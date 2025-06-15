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
  private languageSubscription: Subscription | null = null;

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
Sou um desenvolvedor fullstack com paixão por resolver problemas complexos e criar soluções inteligentes. Atualmente, trabalho com tecnologias modernas como React, Next.Ss, Nest.Js e Node.Js, além de outras ferramentas do ecossistema web e backend.

Formado em Análise e Desenvolvimento de Sistemas pela FATEC de Ribeirão Preto, busco constantemente evoluir como profissional, escrevendo código limpo, testável e bem documentado.

Além da minha rotina de estudos e projetos, gosto de encarar desafios técnicos, especialmente por meio de maratonas de programação e iniciativas onde posso expandir meus conhecimentos. Fora da tecnologia, curto resolver cubos mágicos e praticar violino.
      `
        .split('\n')
        .filter((p) => p.trim() !== '');
    } else {
      this.greeting = `Hello, I'm João!`;
      this.paragraphs = `
I'm a fullstack developer passionate about solving complex problems and building smart solutions. I currently work with modern technologies such as React, Next.js, Nest.Js and Node.Js, along with other tools from the web and backend ecosystems.

Graduated in Systems Analysis and Development from FATEC in Ribeirão Preto, I'm always seeking to grow professionally by writing clean, testable, and well-documented code.

Besides my routine of studying and building projects, I enjoy facing technical challenges, especially through programming competitions and initiatives where I can expand my knowledge. Outside of tech, I like solving Rubik’s cubes and playing the violin.
      `
        .split('\n')
        .filter((p) => p.trim() !== '');
    }
  }
}
