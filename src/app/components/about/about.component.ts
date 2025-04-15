import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  about_text = `
     Aliquam erat volutpat. Duis blandit faucibus accumsan. Nunc tempus, elit placerat feugiat scelerisque, augue purus lobortis orci, in hendrerit massa risus vitae nulla. Fusce quam dolor, vehicula nec nunc ut, volutpat lacinia ante. Vestibulum non fermentum quam. Etiam non mi et purus molestie bibendum.
Pellentesque in tempor risus. Vivamus in orci velit. Nam finibus ipsum non sapien mollis, a maximus sem pharetra. Sed nec rutrum sapien, sit amet lobortis mi. Ut non elit vitae tellus mollis pharetra vitae quis mi. Duis suscipit massa turpis, vel hendrerit nibh auctor sollicitudin. Ut ut tortor vitae ex tincidunt ornare a non orci. Maecenas iaculis pulvinar condimentum. Ut in varius urna. Donec convallis tortor ut sollicitudin consequat. Ut vitae fermentum mi. Nam volutpat facilisis molestie. Suspendisse potenti. Nunc quis placerat enim. Suspendisse potenti. Ut lorem neque, imperdiet in augue eget, ullamcorper tincidun est.
  `;
}
