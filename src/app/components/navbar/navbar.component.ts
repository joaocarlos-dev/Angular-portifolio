import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;

  // Textos traduzíveis
  aboutText = '';
  experienceText = '';
  projectsText = '';
  contactText = '';
  resumeText = '';
  titleText = '';

  private languageSubscription!: Subscription;

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.setLanguageContent();
    this.languageSubscription = this.languageService
      .getLanguageObservable()
      .subscribe(() => {
        this.setLanguageContent();
      });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private setLanguageContent() {
    if (this.languageService.isPortuguese()) {
      this.titleText = 'João Henrique';
      this.aboutText = 'Sobre';
      this.experienceText = 'Experiências';
      this.projectsText = 'Projetos';
      this.contactText = 'Contato';
      this.resumeText = 'Currículo';
    } else {
      this.titleText = 'João Henrique';
      this.aboutText = 'About';
      this.experienceText = 'Experiences';
      this.projectsText = 'Projects';
      this.contactText = 'Contact me';
      this.resumeText = 'Resume';
    }
  }

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
    event.stopPropagation();
    this.languageService.toggleLanguage();
  }

  get currentLanguage() {
    return this.languageService.getLanguage();
  }
}
