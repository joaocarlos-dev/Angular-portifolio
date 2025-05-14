import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss',
})
export class CurriculumComponent implements OnInit {
  pdfSrc: string = '';
  currentLanguage: 'en' | 'pt' = 'pt';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    // Inicializa o PDF conforme o idioma atual
    this.currentLanguage = this.languageService.getLanguage();
    this.updatePdfSrc(this.currentLanguage);

    // Reage às mudanças de idioma
    this.languageService.getLanguageObservable().subscribe((lang) => {
      this.currentLanguage = lang;
      this.updatePdfSrc(lang);
    });
  }

  updatePdfSrc(lang: 'en' | 'pt') {
    this.pdfSrc =
      lang === 'en'
        ? '/assets/joao-henrique-en.pdf'
        : '/assets/joao-henrique.pdf';
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = this.pdfSrc.split('/').pop()!;
    link.click();
  }
}
