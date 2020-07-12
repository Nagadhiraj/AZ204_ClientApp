import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private authservice: AuthserviceService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/admin/dashboard']);
  }

  //userNameErrorMessage: String;
  //passwordErrorMessage: String;
  //ErrorMessage: String;

  //userName = new FormControl('', [Validators.required]);
  //password = new FormControl('', [Validators.required]);

  //user: User;

  //OnSaveLogin() {
  //  this.userNameErrorMessage = this.userName.hasError('required') ? 'Please enter your Username' : '';
  //  this.passwordErrorMessage = this.password.hasError('required') ? 'Please enter a Password' : '';

  //  if (!(this.userName.invalid && this.password.invalid)) {

  //    //console.log(this.userName.value);
  //    //console.log(this.password.value);
  //      const user = new User(this.userName.value, this.password.value, 0,"","","");

  //      this.authservice.authenticateUser(user)
  //        .subscribe(
  //        res => {
  //            // on response receive save token, user details in a model/browser storage
              
  //          this.ErrorMessage = "Logged In";
  //          //this.routerService.routeToLogin();
  //          this.user = res as User;
  //          //console.log(this.user.message);
  //          if (this.user.message == "User Authenticated")
  //          {
  //            this.authservice.setLocalStorage(this.user);
  //            // set header components here
  //            if(this.user.roleName == "client")
  //            this.router.navigate(['user/dashboard']);
  //            else
  //            this.router.navigate(['admin/dashboard'])
  //          }
  //          else
  //            this.ErrorMessage = this.user.message;
  //          }, err => {
  //            this.ErrorMessage = err.error.message;
  //          }
  //        );
      

  //  }
  //}

}
