import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../services/organization.service';
@Component({
  selector: 'app-add-organization-admin',
  templateUrl: './add-organization-admin.component.html',
  styleUrls: ['./add-organization-admin.component.css']
})
export class AddOrganizationAdminComponent implements OnInit {

  Firstname = '';
  Lastname = '';
  address = '';
  Number = '';
  EmailID = '';
  Password = '';
  UserType = '';
  OrganizationName = '';

  private accountDetails;
  InvalidUser = false;
  constructor(private AccountService: OrganizationService) { }

  ngOnInit() {
    this.AccountService.getallAdminUsers().subscribe(res => {
      console.log('return call from db', res);
      this.accountDetails = res;
    });
  }
  addPatronUser() {
    const accounts = {
      Firstname: this.Firstname,
      Lastname: this.Lastname,
      EmailID: this.EmailID,
      Password: this.Password,
      UserType: 'OrganizationAdmin',
      OrganizationName: ''
    };
    /*Checking if users exists in DB by calling LoginServices*/
    console.log('before service call: ', accounts);
    this.AccountService.createAdminAccount(accounts).subscribe( (data) => {
      // @ts-ignore
      if (data.message === 'success') {
        console.log(data);
        this.AccountService.getallAdminUsers().subscribe(res => {
          console.log('return call from db', res);
          this.accountDetails = res;
        });
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });

  }

}
