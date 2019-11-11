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
  uriAdmin = 'http://localhost:3000/admin';
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

  createDriver(accounts) {
    console.log('In the service call', accounts);
    return this.http.post(`${this.uri}` + '/createDriver', accounts);
  }

  AddShuttle(accounts) {
    console.log('In the service call', accounts);
    return this.http.post(`${this.uri}` + '/AddShuttle', accounts);
  }
  getAllAccounts(){
    console.log('in service page');
    return this.http.get(`${this.uri}/getallAccounts`, httpOptions);
  }
  getallAdminUsers(){
    console.log('in service page');
    return this.http.get(`${this.uri}/getallAdminUsers`, httpOptions);
  }
  getAllShuttles() {
    console.log('in service page');
    return this.http.get(`${this.uri}/getAllShuttles`, httpOptions);
  }

  getAllDrivers() {
    console.log('in service page');
    return this.http.get(`${this.uri}/getAllDrivers`, httpOptions);
  }

  getallorg(){
    console.log('in org page');
    return this.http.get(`${this.uri}/getOrgNames`, httpOptions);
  }

  getShuttleDriver() {
    return this.http.get(`${this.uriAdmin}/dashboardDetails`, httpOptions );
  }

  getShuttlebooking() {
    return this.http.get(`${this.uriAdmin}/getshuttelbooking`);
  }

}
