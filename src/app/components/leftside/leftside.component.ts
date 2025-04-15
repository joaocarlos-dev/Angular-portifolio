import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-leftside',
  imports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './leftside.component.html',
  styleUrl: './leftside.component.scss',
})
export class LeftsideComponent {}
