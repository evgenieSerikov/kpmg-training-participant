import { Component } from '@angular/core';

const DefaultCollection = {name: 'Alex', age: '15'}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = 'My super text';
  // --------------------------------
  DefaultCollection = DefaultCollection;
  collection = Object.assign({}, DefaultCollection);

  resetCollection() {
    this.collection = Object.assign({}, DefaultCollection);
  }
  // --------------------------------
  names = ['Yan', 'Yura', 'Tanya'];
  // --------------------------------
  isIfVisible: boolean;
}
