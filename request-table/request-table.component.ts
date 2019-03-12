import { Component, OnInit } from '@angular/core';
import { Person } from '../models/app.person.model';
import { PersonService } from '../services/app.person.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})
export class RequestTableComponent implements OnInit {

  person: Person;
  tableHeaders: Array<string>;
  requestPersons: Array<string>;

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
    this.requestPersons = new Array<string> ();
  }

  ngOnInit() {
    for(let p in this.person){
      this.tableHeaders.push(p);
    }

  this.personService.getTempPer().subscribe(
    (resp: Response)=>{
      this.requestPersons = resp.json().data;
      console.log(resp.json().data);
      },
      error =>{
        console.log(`Error Occured ${error}`);
      }
    );
  }

  getselectedrow (p:Person) {
    //1. Create a deep copy of the selected product
    //2. Assign that copy to this.product
    this.person = Object.assign ({}, p);
}

  onClickApprove() {
    alert ("Approved");
    
    this.personService.getExistingPerson(this.person).subscribe(
    (resp: Response)=>{
      console.log (resp.json().data);
      
      if (resp.json().data) {
        console.log ("The User already exists. Updating...");
        //  updating an existing record in permanent database
        this.personService.updateData(this.person).subscribe(
          (resp: Response)=>{
            console.log (resp.json().data);
            },
            error =>{
              console.log(`Error Occured ${error}`);
            }
          );
          // removing the entry from temp database
          this.personService.deleteTemp(this.person).subscribe(
            (resp: Response)=>{
              console.log (resp.json().data);
              },
              error =>{
                console.log(`Error Occured ${error}`);
              }
            );
      } else {
        console.log ("The User does not exist. Creating...");
        //  creating a new entry in permanent database
        this.personService.createData(this.person).subscribe(
          (resp: Response)=>{
            console.log (resp.json().data);
            },
            error =>{
              console.log(`Error Occured ${error}`);
            }
          );
          // removing the entry from temp database
          this.personService.deleteTemp(this.person).subscribe(
            (resp: Response)=>{
              console.log (resp.json().data);
              },
              error =>{
                console.log(`Error Occured ${error}`);
              }
            );
          }
      },
      error =>{
        console.log(`Error Occured ${error}`);
      }
    );
  }

  onClickReject() {
    alert ("Rejected");
    console.log (JSON.stringify (this.person));
    // removing the entry from temp database
    this.personService.deleteTemp(this.person).subscribe(
      (resp: Response)=>{
        console.log (resp.json().data);
        },
        error =>{
          console.log(`Error Occured ${error}`);
        }
      );
  }
}
