import { Component } from '@angular/core';
import { LeftsideComponent } from '../leftside/leftside.component';
import { RightsideComponent } from '../rightside/rightside.component';
import { MiddleContentComponent } from '../middle-content/middle-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftsideComponent, RightsideComponent, MiddleContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  activeSection: 'about' | 'experience' | 'projects' | 'contact' | 'resume' =
    'about';

  onSectionChange(section: typeof this.activeSection) {
    this.activeSection = section;
  }
}
