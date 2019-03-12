import { Component, OnInit, Input } from '@angular/core';
import { Person, Genders, Disability, MStatus, EStatus } from '../models/app.person.model';
import { PersonService } from '../services/app.person.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  person: Person;
  persons: Array<Person>;
  genders = Genders;
  disability = Disability;
  mStatus = MStatus;
  eStatus = EStatus;

  @Input () readonly: boolean;

  constructor(private personService: PersonService) {
    this.person = new Person ( // 15 args
      '', {}, '',
      '', '', {},
      '', '', '',
      '', '', '',
      '', '', ''
    );
    this.persons = new Array<Person> ();
  }

  ngOnInit() {
    this.personService.getData().subscribe (
      (resp: Response) => {
          this.person = resp.json().data;
      },
      error => {
          console.log (`Error Occurred ${error}`);
      }
    );
  }

  onClickUpdate() {
    alert (`Your request for update has been successfully made.
    This may take some time, please check again later.`);
    this.personService.requestCreate(this.person).subscribe(
      (resp: Response)=>{
        console.log (resp.json().data);
        },
        error =>{
          console.log(`Error Occured ${error}`);
        }
      );
  }

}
