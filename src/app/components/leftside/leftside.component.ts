import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Output,
} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leftside',
  imports: [NavbarComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './leftside.component.html',
  styleUrl: './leftside.component.scss',
})
export class LeftsideComponent {
  @Output() sectionChanged = new EventEmitter<
    'about' | 'experience' | 'projects' | 'contact' | 'resume'
  >();

  onSectionClick(
    section: 'about' | 'experience' | 'projects' | 'contact' | 'resume',
  ): void {
    this.sectionChanged.emit(section);
  }
}
