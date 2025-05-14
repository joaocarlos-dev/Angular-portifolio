import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;

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
}
