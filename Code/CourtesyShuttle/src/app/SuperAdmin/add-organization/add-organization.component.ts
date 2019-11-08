import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {
  firstName = '';
  lastName = '';
  emailID = '';
  address = '';
  userName = '';
  password = '';
  userType = '';

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
  }

}
