import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";

export const routeComponents = [HomeComponent,LoginComponent,PagenotfoundComponent,ErrorComponent];

const routes: Routes = [
  {path: 'login', component : LoginComponent},
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
