import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  username: string; 
  password: string;
  constructor(private loginService: LoginService) {

  }

  OnAuthenticateClicked(): void {
    this.loginService.authenticate(this.username, this.password).subscribe(response => {
    this.loggedIn = response;
  });
  }

  ngOnInit() {
  }
}