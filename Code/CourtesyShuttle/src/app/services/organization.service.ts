import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  uri = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  /*Sending account Inputted data bankend services and returning the response to Login ts*/
  createAccount(accounts) {
    console.log('In the service call', accounts);
    return this.http.post(`${this.uri}` + '/register', accounts);
  }

  createAdminAccount(accounts) {
    console.log('In the service call', accounts);
    return this.http.post(`${this.uri}` + '/AddOrganizationAdmin', accounts);
  }
  getAllAccounts(){
    console.log('in service page');
    return this.http.get(`${this.uri}/getallAccounts`, httpOptions);
  }
  getallAdminUsers(){
    console.log('in service page');
    return this.http.get(`${this.uri}/getallAdminUsers`, httpOptions);
  }

}
