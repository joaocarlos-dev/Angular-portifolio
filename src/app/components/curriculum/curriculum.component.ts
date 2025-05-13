import { Component } from '@angular/core';
import {
  NgxExtendedPdfViewerModule,
  NgxExtendedPdfViewerService,
  pdfDefaultOptions,
} from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-curriculum',
  imports: [NgxExtendedPdfViewerModule],
  providers: [NgxExtendedPdfViewerService],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss',
})
export class CurriculumComponent {
  downloadPDF() {
    const link = document.createElement('a');
    link.href = '/assets/joao-henrique.pdf';
    link.download = 'joao-henrique.pdf';
    link.click();
  }
}
