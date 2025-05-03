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
      title: 'Analista de Suporte e Desenvolvedor',
      time: '09/2024 - Atual',
      company: 'INOV.AI',
      content: `Atuo na equipe de suporte e desenvolvimento em uma lawtech que entrega soluções 
      com Inteligência Artificial no setor jurídico. Sou responsável pelo monitoramento de 
      microsserviços, criação de automações para garantir a qualidade do produto e 
      ações preventivas para identificar falhas antes que impactem o cliente. 
      Mantenho e evoluo um bot do Telegram que monitora os serviços e sou responsável pela 
      criação de uma aplicação para servir como base de conhecimentos e documentações
      internas.`,
      technologies: [
        'Python',
        'Angular',
        'PostgreSQL',
        'MongoDB',
        'Kubernetes',
        'ElasticSearch',
      ],
      isOpen: false,
    },
    {
      title: 'Suporte de Infraestrutura',
      time: '10/2023 - 08/2024',
      company: 'UNIMED',
      content: `Atuei na manutenção da infraestrutura da empresa, incluindo máquinas, 
      servidores e gerenciamento de domínio e GPOs. Automatizei relatórios empresariais 
      utilizando Python e Selenium para apoiar a tomada de decisão.`,
      technologies: ['Python', 'Selenium', 'Angular', 'Windows Server'],
      isOpen: false,
    },
  ];

  toggleCard(index: number) {
    const isAlreadyOpen = this.cards[index].isOpen;

    this.cards.forEach((card) => (card.isOpen = false));

    if (!isAlreadyOpen) {
      setTimeout(() => {
        this.cards[index].isOpen = true;
      }, 150);
    }
  }
}
