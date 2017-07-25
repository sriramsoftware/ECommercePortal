import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from "@angular/http";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

import { AppRoutingModule , routeComponents } from "./app-routing.module";

import { AppComponent } from './app.component';
import { LoginService } from "./user/login.service";

@NgModule({
  declarations: [
    AppComponent,
   routeComponents
  ],
  imports: [
    BrowserModule, AppRoutingModule, CoreModule, SharedModule, HttpModule,FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
