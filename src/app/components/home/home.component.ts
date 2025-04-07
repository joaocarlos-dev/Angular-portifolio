import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { LeftsideComponent } from '../leftside/leftside.component';
import { RightsideComponent } from '../rightside/rightside.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LeftsideComponent, RightsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [],
})
export class HomeComponent {}
