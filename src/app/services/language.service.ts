import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLanguage: 'en' | 'pt' = 'pt';
  private languageSubject = new BehaviorSubject<'en' | 'pt'>(
    this.currentLanguage,
  );

  setLanguage(lang: 'en' | 'pt') {
    this.currentLanguage = lang;
    this.languageSubject.next(lang);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pt' : 'en';
    this.languageSubject.next(this.currentLanguage);
  }

  getLanguage() {
    return this.currentLanguage;
  }

  isPortuguese() {
    return this.currentLanguage === 'pt';
  }

  getLanguageObservable() {
    return this.languageSubject.asObservable();
  }
}
