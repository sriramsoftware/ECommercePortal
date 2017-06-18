import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule , routeComponents } from "./app-routing.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   routeComponents
  ],
  imports: [
    BrowserModule, AppRoutingModule, CoreModule, SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
