import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-samplechild',
  templateUrl: './samplechild.component.html',
  styleUrls: ['./samplechild.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamplechildComponent implements OnInit {
  @Input('data') data!: any;
  constructor() {}

  ngOnInit(): void {}
  whenComponentRerendered() {
    console.log('child component rerendered');
  }
  changeValue() {
    this.data.value = 5;
  }
}
