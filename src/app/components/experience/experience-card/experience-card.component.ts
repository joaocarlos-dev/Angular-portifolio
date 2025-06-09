import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-experience-card',
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  constructor(private languageService: LanguageService) {}
  ptCards = [
    {
      title: 'Analista de Suporte',
      time: '09/2024 - 05/2025',
      company: 'INOV.AI',
      content: `Atuo na equipe de suporte e desenvolvimento em uma lawtech que entrega 
      soluções com Inteligência Artificial no setor jurídico. Sou responsável pelo monitoramento 
      de microsserviços, criação de automações para garantir a qualidade do produto e 
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
      technologies: ['Python', 'Selenium', 'Windows Server'],
      isOpen: false,
    },
  ];

  enCards = [
    {
      title: 'Support Analyst',
      time: '09/2024 - 05/2025',
      company: 'INOV.AI',
      content: `I work on the support and development team at a lawtech that delivers 
      Artificial Intelligence solutions in the legal sector. I'm responsible for monitoring 
      microservices, creating automations to ensure product quality, and implementing 
      preventive actions to identify issues before they impact the client. I maintain and evolve 
      a Telegram bot that monitors services and lead the development of an internal 
      knowledge base and documentation system.`,
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
      title: 'Infrastructure Support',
      time: '10/2023 - 08/2024',
      company: 'UNIMED',
      content: `I was responsible for maintaining the company’s infrastructure, including workstations, 
      servers, domain management, and GPO configurations. I automated business reports using 
      Python and Selenium to support decision-making processes.`,
      technologies: ['Python', 'Selenium', 'Windows Server'],
      isOpen: false,
    },
  ];

  get cards() {
    return this.languageService.isPortuguese() ? this.ptCards : this.enCards;
  }

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
