import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-leftside',
  imports: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './leftside.component.html',
  styleUrl: './leftside.component.scss',
})
export class LeftsideComponent {}
