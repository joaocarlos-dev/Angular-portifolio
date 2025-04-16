import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

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
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          height: '0px',
          overflow: 'hidden',
          opacity: 0,
        }),
        animate(
          '300ms ease-out',
          style({
            height: '*',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({
            height: '0px',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Inov.ai',
      title: 'Analista de suporte',
      duration: '09/2024 - Atual',
      description: `
   Na Inov.ai, sou responsável pelo monitoramento de todos os serviços da empresa, 
   utilizando ElasticSearch e Kubernetes. Também atuo na análise de logs, suporte técnico e automação de
  processos internos com Python. Desenvolvo scripts para análise de dados e sou responsável pela 
  criação e manutenção de uma base de conhecimento interna desenvolvida em Angular, 
  com suporte a diagramas, com o objetivo de centralizar conhecimentos técnicos, 
  regras de negócio e documentações dos serviços.
  `,
      expanded: false,
    },
    {
      company: 'Unimed',
      title: 'Estagiário em Suporte',
      duration: '10/2023 - 08/2024',
      description: `
        Atuei na área de suporte à infraestrutura, 
        auxiliando colaboradores internos em demandas técnicas. 
        Fui responsável pelo gerenciamento do domínio do servidor, configuração de GPOs, 
        instalação e manutenção de estações de trabalho. Além disso, 
        desenvolvi uma automação interna utilizando Python e Selenium para a geração de mais de 
        300 relatórios mensais, otimizando significativamente o tempo da equipe.
      `,
      expanded: false,
    },
    {
      company: 'MaisMix',
      title: 'Desenvolvedor freelancer',
      duration: '06/2023 - 08/2023',
      description: `
        Fui contratado como desenvolvedor freelancer por uma concreteira de Sertãozinho 
        para criar um WebApp de gestão de entregas de concreto. 
        A solução permite o acompanhamento em tempo real das entregas por todos os colaboradores e 
        segue em funcionamento até hoje, com mais de 10 entregas sendo registradas semanalmente. 
        Fui responsável por todo o ciclo de desenvolvimento, desde a prototipagem até o deploy da aplicação.
        O projeto foi desenvolvido utilizando Flutter e Dart, com Firebase como backend e plataforma de hospedagem.
      `,
      expanded: false,
    },
  ];

  toggleDetails(index: number): void {
    this.experiences = this.experiences.map((exp, i) => ({
      ...exp,
      expanded: i === index ? !exp.expanded : false,
    }));
    console.log(this.experiences[index].expanded);
  }
}
