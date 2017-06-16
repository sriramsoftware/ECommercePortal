import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PagenotfoundComponent } from "./pagenotfound.component";
import { ErrorComponent } from "./error.component";

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'error', component : ErrorComponent},
  {path: 'pagenotfound', component : PagenotfoundComponent},
  {path: '', pathMatch: 'full', redirectTo : 'home' },
  {path: '**', pathMatch: 'full', redirectTo : 'error' },
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
