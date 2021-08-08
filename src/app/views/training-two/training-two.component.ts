import { Component } from '@angular/core';

const DefaultCollection = {name: 'Alex', age: '15'};

@Component({
  selector: 'app-training-two',
  templateUrl: './training-two.component.html',
  styles: []
})
export class TrainingTwoComponent {

  text = 'My super text';
  // --------------------------------
  DefaultCollection = DefaultCollection;
  collection = Object.assign({}, DefaultCollection);

  // --------------------------------
  names = ['Yan', 'Yura', 'Tanya'];
  // --------------------------------
  isIfVisible: boolean;

  resetCollection() {
    this.collection = Object.assign({}, DefaultCollection);
  }

}
