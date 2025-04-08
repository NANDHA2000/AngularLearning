import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  title = 'Interpolation Demo';
  userName = 'John Doe';
  age = 28;
  today = new Date();

  getWelcomeMessage(): string {
    return `Welcome, ${this.userName}!`;
  }
}
