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
  emailID = '';
  password = '';
  InvalidUser = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  userLogin(){
    this.router.navigate(['/addorganization']);
  }
  // userLogin() {
  //   const user = {
  //     emailID: this.emailID,
  //     password: this.password
  //   };
  //   console.log('before login service call', user);
  //   /*Checking if users exists in DB by calling LoginServices*/
  //   this.loginService.authenticate(user).subscribe( (data) => {
  //     /*Receives success message if user exists and with correct credentails*/
  //     // @ts-ignore
  //     if (data.message === 'success') {
  //       // @ts-ignore
  //       console.log('logged in data', data.userType);
  //       // const userInfo = this.loggedInUserInfo.getUsers();
  //       // console.log(userInfo);
  //       // @ts-ignore
  //       if (data.userType == 'SuperAdmin') {
  //         this.router.navigate(['/addAccount']);
  //       } else { // @ts-ignore
  //         // @ts-ignore
  //         if (data.userType == 'OrganizationAdmin') {
  //           this.router.navigate(['/dashboard']);
  //         } else {
  //           // @ts-ignore
  //           if(data.userType == 'Patrol'){
  //             this.router.navigate(['/dashboard']);
  //           }
  //         }
  //       }
  //
  //       // @ts-ignore
  //       console.log(data.message);
  //       // @ts-ignore
  //       localStorage.setItem('userType', data.userType);
  //       // localStorage.setItem('userType', data.userType);
  //     } else {
  //       // @ts-ignore
  //       console.log(data.message);
  //       this.InvalidUser = true;
  //     }
  //   });
  // }
}
