import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  name = '';

  showAlert() {
    alert('Button clicked!');
  }
}
