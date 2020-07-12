import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from '../../services/authservice.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(private authservice: AuthserviceService, private router: Router) { }

  ngOnInit() {
  }


  public value: Date = new Date("01/01/2019");

  userNameErrorMessage: String;
  passwordErrorMessage: String;
  confirmPasswordErrorMessage: String;
  emailErrorMessage: String;
  dobErrorMessage: String;
  contactErrorMessage: String;
  ErrorMessage: String;

  dobValue: Date;


  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  dob = new FormControl('', [Validators.required]);
  contact = new FormControl('', [Validators.required]);
  OnSave() {
    
    this.userNameErrorMessage = this.userName.hasError('required') ? 'Please enter your Username' : '';
    this.passwordErrorMessage = this.password.hasError('required') ? 'Please enter a Password' : '';
    this.confirmPasswordErrorMessage = this.confirmPassword.hasError('required') ? 'Please re-enter your Password' : '';
    this.emailErrorMessage = this.email.hasError('required') ? 'Please enter an email address' : '';
    this.dobErrorMessage = this.dob.hasError('required') ? 'Please enter your date of birth' : '';
    this.contactErrorMessage = this.contact.hasError('required') ? 'Please enter your adress' : '';

    if (!(this.userName.invalid && this.password.invalid && this.email.invalid && this.dob.invalid)) {
      
      this.ErrorMessage = (this.password.value != this.confirmPassword.value) ? 'Passwords do not match. Please re type your Password and Confirm Password.' : '';

      if (this.password.value == this.confirmPassword.value) {

        const user = new User(this.userName.value, this.password.value, 2, this.email.value, this.dob.value.toLocaleDateString(), this.contact.value);

        this.authservice.registerUser(user)
          .subscribe(
          res => {
            this.ErrorMessage = 'You are registered';
            //this.routerService.routeToLogin();
            this.router.navigate(['auth/login']);
          }, err => {
            this.ErrorMessage = err.error.message;
          }
        );;
      }
      
    }
  }
}
