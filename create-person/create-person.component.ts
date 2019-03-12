import { Component, OnInit, Input } from '@angular/core';
import { Person, Genders, Disability, MStatus, EStatus } from '../models/app.person.model';
import { PersonService } from '../services/app.person.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  person: Person;
  genders = Genders;
  disability = Disability;
  mStatus = MStatus;
  eStatus = EStatus;

  @Input () idValue: string;

  constructor(
    private personService: PersonService,
  ) {
    this.person = new Person ( // 15 args
      '', {}, '',
      '', '', {},
      '', '', '',
      '', '', '',
      '', '', ''
    );
   }

  ngOnInit() {
  }

  createPerson ()
  {
    this.person.PersonalUniqueID = this.idValue;
    this.personService.requestCreate (this.person).subscribe (
      (resp: Response) => {
        console.log (resp);
      },
      error => {
          console.log (`Error Occurred ${error}`);
      });
      alert (`Your request for has been successfully made. Waiting for approval.
      This may take some time, please check again later.`)
  }

}
