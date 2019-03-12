import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable ()
export class UserService {

  url: string;
    constructor(private http: Http) {
        this.url = 'http://localhost:4070';
    }

  // REQUEST CREATE NEW USER --- S
  requestCreate(usr) {
    let resp: Observable<Response>;
    let header: Headers = new Headers ({'Content-Type': 'application/json'});
    let options: RequestOptions = new RequestOptions ();
    options.headers = header;

    resp = this.http.post (
      `${this.url}/api/users`,
      JSON.stringify (usr),
      options
    );
    return resp;
  }

  // DISPLAY ALL USERS
  getAllUsers() {
    console.log("Getting all users...");
    let resp: Observable<Response>;

    resp = this.http.get (
      `${this.url}/api/users`
    );
    console.log ("....." + JSON.stringify(resp));
    return resp;
  }
}
