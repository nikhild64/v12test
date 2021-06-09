import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginlibModule } from '@nikhildhawan/loginpage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntertestingComponent } from './intertesting/intertesting.component';
import { TestInterceptor } from './test.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    IntertestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginlibModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TestInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
