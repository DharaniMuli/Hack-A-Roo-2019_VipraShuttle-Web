import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstName = '';
  lastName = '';
  userName = '';
  EmailID = '';
  Password = '';
  InvalidUser = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  // userLogin(){
  //   this.router.navigate(['/addorganization']);
  // }
  userLogin() {
    const user = {
      EmailID: this.EmailID,
      Password: this.Password
    };
    console.log('before login service call', user);
    /*Checking if users exists in DB by calling LoginServices*/
    this.loginService.authenticate(user).subscribe( (data) => {
      /*Receives success message if user exists and with correct credentails*/
      // @ts-ignore
      const mymessage = 'Success';
      console.log("Response data",data);
      if (mymessage === 'Success') {
        // @ts-ignore
        console.log('logged in data', data.Usertype);
        // const userInfo = this.loggedInUserInfo.getUsers();
        // console.log(userInfo);
        // @ts-ignore
        console.log("data.Usertype",data.user[0].Usertype);
        if (data.user[0].Usertype == 'SuperAdmin') {
          this.router.navigate(['/addorganization']);
        } else { // @ts-ignore
          // @ts-ignore
          if (data.user[0].Usertype == 'OrganizationAdmin') {
            this.router.navigate(['/addorganizationadmincomponent']);
          } else {
            // @ts-ignore
            if(data.user[0].Usertype == 'Patrol'){
              this.router.navigate(['/dashboard']);
            }
          }
        }

        // @ts-ignore
        console.log(data.message);
        // @ts-ignore
        localStorage.setItem('Usertype', data.user[0].Usertype);
        // localStorage.setItem('userType', data.userType);
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });
  }
}
