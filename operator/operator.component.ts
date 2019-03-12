import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  idValue: string;

  @ViewChild(CreateUserComponent) child: CreateUserComponent;

  constructor(
    private router: Router
  ) {
    this.idValue = Math.random().toString(36).substr(2, 9);
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem ('token');
    this.router.navigate (['']);
  }

  onClickCreate () {
    this.child.createUser ();  
  }
}
