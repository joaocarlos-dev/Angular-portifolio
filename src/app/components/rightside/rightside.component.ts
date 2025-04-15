import { Component } from '@angular/core';
import { AboutComponent } from '../../shared/about/about.component';

@Component({
  selector: 'app-rightside',
  imports: [AboutComponent],
  templateUrl: './rightside.component.html',
  styleUrl: './rightside.component.scss',
})
export class RightsideComponent {}
