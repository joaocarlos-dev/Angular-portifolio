import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',

  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isDesktop = true;

  ngOnInit(): void {
    this.onResize(); // Chama na inicialização
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth > 768;
    if (this.isDesktop) {
      this.isMenuOpen = false; // fecha menu se virou desktop
    }
  }
}
