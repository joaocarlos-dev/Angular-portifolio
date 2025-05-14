import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.scss'],
  imports: [],
})
export class LeftsideComponent implements OnInit, OnDestroy {
  @Output() sectionChanged = new EventEmitter<
    'about' | 'experience' | 'projects' | 'contact' | 'resume'
  >();

  greetingText = '';
  subtitleText = '';
  aboutText = '';
  experienceText = '';
  projectsText = '';
  contactText = '';
  resumeText = '';

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
  setLanguageContent() {
    if (this.languageService.isPortuguese()) {
      this.greetingText = 'João Henrique';
      this.subtitleText = 'Desenvolvedor Full-stack';
      this.aboutText = 'Sobre';
      this.experienceText = 'Experiências';
      this.projectsText = 'Projetos';
      this.contactText = 'Contato';
      this.resumeText = 'Currículo';
    } else {
      this.greetingText = 'João Henrique';
      this.subtitleText = 'Full-stack Developer';
      this.aboutText = 'About';
      this.experienceText = 'Experiences';
      this.projectsText = 'Projects';
      this.contactText = 'Contact me';
      this.resumeText = 'Resume';
    }
  }
  onSectionClick(
    section: 'about' | 'experience' | 'projects' | 'contact' | 'resume',
  ): void {
    this.sectionChanged.emit(section);
  }
}
