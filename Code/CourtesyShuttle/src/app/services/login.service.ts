import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  authenticate(user) {
    return this.http.post(`${this.uri}`, user);
  }

}
