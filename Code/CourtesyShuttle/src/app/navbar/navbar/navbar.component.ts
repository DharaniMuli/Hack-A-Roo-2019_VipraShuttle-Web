import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /*AppOwner ={};*/
  AccountAdmin = {};
  constructor() { }

  ngOnInit() {
    const Usertype = localStorage.getItem('Usertype');
    console.log("User Type",Usertype);
    if (Usertype === 'SuperAdmin') {
      console.log(Usertype);
      this.AccountAdmin = {
        AddOrganization : 'Add Organization',
        AddOrganizationAdmin: 'Add Organization Admin',
      }

    }
  }


}
