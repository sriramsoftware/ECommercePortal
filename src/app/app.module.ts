import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { ErrorComponent } from './error.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
