import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserRoles } from '../models/app.user.model';
import { LoginService } from '../services/app.login.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  userRoles = UserRoles;
  userRole: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
      this.user = new User ('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  login(): void {
    console.log (this.user);
    this.loginService.getData (this.user).subscribe (
      (resp: Response) => {
        localStorage.setItem ('id', resp.json().data.UserId);
        localStorage.setItem ('name', resp.json().data.UserName);
        localStorage.setItem ('role', resp.json().data.RoleName);
      },
      error => {
          console.log (`Error Occurred ${error}`);
      });

    this.userRole = localStorage.getItem('role');
    this.loginService.authUser (this.user).subscribe (
      (resp: Response) => {
          console.log (this.user.RoleName);
          const token = JSON.stringify (resp.json().token);
          localStorage.setItem ('token', resp.json().token);
          if (token) {
            if (this.userRole === this.user.RoleName ) {
              if (this.userRole === 'AccessUser') {
                alert ('Access User');
                this.router.navigate (['userProfile']);

              } else if (this.userRole === 'Operator') {
                alert ('Operator');
                this.router.navigate (['operator']);
              } else {
                alert ('Administrator');
                this.router.navigate (['administrator']);
              }} else {
                alert ('Your roles don\'t match');
              }} else {
                alert ('Sorry something went wrong. Please try again later.');
              }
            },
            error => {
              console.log (`Error Occurred ${error}`);
            });
          }
}
