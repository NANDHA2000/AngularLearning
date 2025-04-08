import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topics = [
    { name: 'Interpolation', path: '/interpolation' },
    { name: 'Bindings', path: '/binding' },
    // add more topics here
  ];
}
