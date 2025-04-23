import { Component } from '@angular/core';
import { LeftsideComponent } from '../leftside/leftside.component';
import { RightsideComponent } from '../rightside/rightside.component';
import { MiddleContentComponent } from '../middle-content/middle-content.component';

@Component({
  selector: 'app-home',
  imports: [LeftsideComponent, RightsideComponent, MiddleContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [],
})
export class HomeComponent {}
