import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftsideComponent } from '../leftside/leftside.component';
import { RightsideComponent } from '../rightside/rightside.component';
import { MiddleContentComponent } from '../middle-content/middle-content.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LeftsideComponent,
    RightsideComponent,
    MiddleContentComponent,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  activeSection: 'about' | 'experience' | 'projects' | 'contact' | 'resume' =
    'about';

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSectionChange(section: typeof this.activeSection) {
    this.activeSection = section;
  }
}
