import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  data = { value: 1 };
  constructor() {}

  ngOnInit(): void {}
  valueChange() {
    this.data = {
      ...this.data,
      value: 5,
    };
  }
  whenComponentRerendered() {
    console.log('Parent component rerendered');
  }
  consoleOutput(){
    console.log('Console from button click');

  }
}
