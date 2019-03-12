import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserRoles, User } from '../models/app.user.model';
import { CreatePersonComponent } from '../create-person/create-person.component';
import { UserService } from '../services/app.user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User;
  userRoles = UserRoles;
  
  @ViewChild(CreatePersonComponent) child: CreatePersonComponent;
  @Input () idValue: string;
  
  constructor(
    private userService: UserService,
  ) {
    this.user = new User ('', '', '', '', '', '');
  }

  ngOnInit() {
    console.log (this.user);
  }

  createUser () {
    this.user.UserId = this.idValue;
    this.userService.requestCreate (this.user).subscribe (
      (resp: Response) => {
        console.log (resp);
      },
      error => {
          console.log (`Error Occurred ${error}`);
      });

      alert (`Your request for creating a new user has been successfully made.
      The user ${this.user.UserName} has been created.`);

    this.child.createPerson ();
  }

}
