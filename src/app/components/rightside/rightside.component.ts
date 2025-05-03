import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-rightside',
  standalone: true,
  imports: [],
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.scss'],
})
export class RightsideComponent {
  constructor(public languageService: LanguageService) {}

  // Método para alternar a linguagem
  toggleLanguage(event: Event) {
    event.stopPropagation(); // Impede a propagação do evento de clique
    this.languageService.toggleLanguage();
  }

  // Método para alternar o cartão de experiência (não queremos que isso afete a troca de idioma)
  toggleCard(event: Event) {
    event.stopPropagation(); // Impede a propagação do evento de clique
    // Aqui você deve colocar a lógica de abrir/fechar os cards, se necessário
  }

  get currentLanguage() {
    return this.languageService.getLanguage();
  }
}
