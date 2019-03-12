import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable ()
export class PersonService {
    url: string;
    constructor(private http: Http) {
        this.url = 'http://localhost:4070';
    }

  // GET PERSON DETAILS AFTER LOGIN --- BY ID
  getData(): Observable<Response> {
    let id = localStorage.getItem ('id');
    let t = localStorage.getItem ('token');
    let resp: Observable<Response>;
    let header: Headers = new Headers ({'Content-Type': 'application/json'});
    header.append ('authorization', `bearer ${t}`); // to add more values in the header
    let options: RequestOptions = new RequestOptions ();
    options.headers = header;

    resp = this.http.get (
      `${this.url}/api/person/${id}`,
      options
    );
    return resp;
  }

  // DISPLAY ALL PERSONS --- ALL PERSONS
  getAllUsers() {
    console.log ("IN GET ALL PERSONS");
    let resp: Observable<Response>;
    let header: Headers = new Headers ({'Content-Type': 'application/json'});
    let options: RequestOptions = new RequestOptions ();
    options.headers = header;

    resp = this.http.get (
      `${this.url}/api/person`,
      options
    );
    console.log (resp);
    return resp;
  }

  // REQUEST CREATE NEW TEMP PERSON --- STORE IN TEMP USER
  requestCreate(per) {
    console.log ("Creating...");
    let resp: Observable<Response>;
    let header: Headers = new Headers ({'Content-Type': 'application/json'});
    let options: RequestOptions = new RequestOptions ();
    options.headers = header;

    resp = this.http.post (
      `${this.url}/api/tempPerson`,
      JSON.stringify (per),
      options
    );
    return resp;
  }

  // DISPLAY TEMP-PERSONS --- ALL REQUESTS
  getTempPer() {
    console.log ("IN get temp per");
    let resp: Observable<Response>;

    resp = this.http.get (
      `${this.url}/api/tempPerson`
    );
    console.log ("....." + JSON.stringify(resp));
    return resp;
  }

  // CREATE NEW PERSON --- APPROVE BY ADMIN
  createData(per) {
    console.log ("Creating...");
    let resp: Observable<Response>;
    let header: Headers = new Headers ({'Content-Type': 'application/json'});
    let options: RequestOptions = new RequestOptions ();
    options.headers = header;

    resp = this.http.post (
      `${this.url}/api/person`,
      JSON.stringify (per),
      options
    );
    return resp;
  }

  // UPDATE PERSON --- APPROVE BY ADMIN
  updateData(per) {
    console.log("Updating ");
    console.log ("PER"+per);
    let id = per.PersonalUniqueID;

    let resp: Observable<Response>;
    let header:Headers = new Headers ({'Content-Type': 'application/json'});
    let options: RequestOptions = new RequestOptions ();
    options.headers = header;

    resp = this.http.put (
      `${this.url}/api/person/${id}`,
      JSON.stringify (per),
      options
    );
    return resp;
  }

  // DELETE TEMP PERSON ---  AFTER APPROVAL
  deleteTemp(per) {
    console.log("Deleting from temporary records...");
    let id = per.PersonalUniqueID;

    let resp: Observable<Response>
    let header: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.delete(
      `${this.url}/api/tempPersonDelete/${id}`,
      JSON.stringify (per)
    );
    return resp;
  }

  // DISPLAY PERSON BY ID FOR ADMIN
  getExistingPerson(per) {
    console.log("Searching in records...");
    let id = per.PersonalUniqueID;
    let t = localStorage.getItem ('token');

    let resp: Observable<Response>;
    let header: Headers = new Headers ({'Content-Type': 'application/json'});
    header.append ('authorization', `bearer ${t}`); // to add more values in the header
    let options: RequestOptions = new RequestOptions ();
    options.headers = header;

    resp = this.http.get (
      `${this.url}/api/person/${id}`,
      options
    );
    return resp;
  }
}
