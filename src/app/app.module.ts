import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginlibModule } from '@nikhildhawan/loginpage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './comp/sample/sample.component';
import { SamplechildComponent } from './comp/sample/samplechild/samplechild.component';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SamplechildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
