import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../models/app.user.model';

@Injectable ()
export class LoginService {
    url: string;
    constructor(private http: Http) {
        this.url = 'http://localhost:4070';
    }

    // GET USER DETAILS AT LOGIN
    getData(user: User): Observable<Response> {
        const username = user.UserName;
        let resp: Observable<Response>;
        resp = this.http.get (`${this.url}/api/user/${username}`); // retrieving the rest api
        return resp;
    }

    // AUTHORIZE USER WITH TOKEN
    authUser(user: User): Observable<Response> {
      let resp: Observable<Response>;
      // 1. define request header
      let header: Headers = new Headers ({'Content-Type': 'application/json'});
      // header.append ("AUTHORIZATION", "Basic UserName:Password"); to add more values in the header

      // 2. define request options for header
      // a collection of header values
      let options: RequestOptions = new RequestOptions ();
      options.headers = header;

      resp = this.http.post (
          `${this.url}/api/users/auth`,
          JSON.stringify (user),
          options
      );
      return resp;
    }
}
