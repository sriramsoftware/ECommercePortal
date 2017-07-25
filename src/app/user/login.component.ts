import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from "./login.service";
import { User} from "./user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  user : User;
  constructor(private loginService: LoginService) {
    this.user = new User();
    this.loginService.getUser().subscribe(response => {
      if(response.email != null){
        
      }
    });
  }

  OnAuthenticateClicked(): void {
    this.loginService.authenticate(this.user).subscribe(response => {
    this.loggedIn = response;
  });
  }

  ngOnInit() {
  }
}