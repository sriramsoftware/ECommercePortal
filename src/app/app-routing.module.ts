import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./user/login.component";

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
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
