import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-middle-content',
  imports: [AboutComponent],
  templateUrl: './middle-content.component.html',
  styleUrl: './middle-content.component.scss',
})
export class MiddleContentComponent {}
