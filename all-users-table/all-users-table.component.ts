import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/app.person.service';
import { Person } from '../models/app.person.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.css']
})
export class AllUsersTableComponent implements OnInit {

  person: Person;
  tableHeaders: Array<string>;
  allUsersData: Array<string>;

  constructor(
    private personService: PersonService
  ) {
    this.person = new Person ( // 15 args
      '', {}, '',
      '', '', {},
      '', '', '',
      '', '', '',
      '', '', ''
    );
    this.tableHeaders = new Array<string> ();
    this.allUsersData = new Array<string> ();
  }

  ngOnInit() {

  for(let p in this.person){
    this.tableHeaders.push(p);
  }
  
  this.personService.getAllUsers().subscribe(
    (resp: Response)=>{
        this.allUsersData = resp.json().data;
        console.log(resp.json().data);
      },
      error =>{
        console.log(`Error Occured ${error}`);
      }
    );
  }
}
