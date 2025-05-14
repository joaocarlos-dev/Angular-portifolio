import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;
  constructor(public languageService: LanguageService) {}

  @Output() sectionChanged = new EventEmitter<
    'about' | 'experience' | 'projects' | 'contact' | 'resume'
  >();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSectionClick(
    section: 'about' | 'experience' | 'projects' | 'contact' | 'resume',
  ) {
    this.sectionChanged.emit(section);
    this.isMenuOpen = false;
  }

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
