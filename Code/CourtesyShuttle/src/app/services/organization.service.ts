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
  getAllShuttles(){
    console.log('in service page');
    return this.http.get(`${this.uri}/getAllShuttles`, httpOptions);
  }

  getAllDrivers(){
    console.log('in service page');
    return this.http.post(`${this.uri}/getAllDrivers`, httpOptions);
  }
  getDrivers(data1){
    console.log('get drivers',data1);
    let data={
      type:data1
    };
    return this.http.post(`${this.uri}/getDrivers`, data);
  }

  getallorg(){
    console.log('in org page');
    return this.http.get(`${this.uri}/getOrgNames`,httpOptions);
  }

  orgname(data){
    console.log("orgname service",data);
    return this.http.post(`${this.uri}/orgname`,data);
  }

}
