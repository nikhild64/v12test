import { HttpBackend, HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intertesting',
  templateUrl: './intertesting.component.html',
  styleUrls: ['./intertesting.component.scss'],
})
export class IntertestingComponent implements OnInit {
  constructor(private http: HttpClient, private http2: HttpBackend) {}

  ngOnInit(): void {}
  callWitInterceptor() {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe();
  }
  callWithoutInterceptor() {
    this.http2
      .handle(new HttpRequest('GET', 'https://dog.ceo/api/breeds/image/random'))
      .subscribe();
  }
}
