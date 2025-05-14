import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonEngine } from '@angular/ssr/node';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rightside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.scss'],
})
export class RightsideComponent {
  constructor(public languageService: LanguageService) {}

  toggleLanguage(event: Event) {
    event.stopPropagation();
    this.languageService.toggleLanguage();
  }

  toggleCard(event: Event) {
    event.stopPropagation();
  }

  get currentLanguage() {
    return this.languageService.getLanguage();
  }
}
