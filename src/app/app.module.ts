import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginlibModule } from '@nikhildhawan/loginpage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
