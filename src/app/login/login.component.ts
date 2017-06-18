import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private loginService: LoginService) {

  }

  OnAuthenticateClicked(username: string, password: string): void {
    this.loginService.authenticate(username, password).subscribe(response => this.loggedIn = response);
  }

  ngOnInit() {
  }
}