import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/Userservice.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import { AlertService } from '../../../ui/_alert/alert.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  public value: Date = new Date("01/01/2019");

  userNameErrorMessage: string;
  //passwordErrorMessage: String;
  //confirmPasswordErrorMessage: String;
  emailErrorMessage: String;
  dobErrorMessage: string;
  contactErrorMessage: string;
  addressErrorMessage: string;
  genderErrorMessage: string;

  ErrorMessage: String;

  dobValue: Date;


  userName = new FormControl('', [Validators.required]);
  //password = new FormControl('', [Validators.required]);
  //confirmPassword = new FormControl('', [Validators.required]);
  email = new FormControl('');
  dob = new FormControl('', [Validators.required]);
  contact = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);

  constructor(private userService: UserService, private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    //console.log('add user component')
  }
  OnSave() {

    this.userNameErrorMessage = this.userName.hasError('required') ? 'Please enter your Username' : '';
    //this.passwordErrorMessage = this.password.hasError('required') ? 'Please enter a Password' : '';
    //this.confirmPasswordErrorMessage = this.confirmPassword.hasError('required') ? 'Please re-enter your Password' : '';
    this.emailErrorMessage = this.email.hasError('required') ? 'Please enter an email address' : '';
    this.dobErrorMessage = this.dob.hasError('required') ? 'Please enter your date of birth' : '';
    this.contactErrorMessage = this.contact.hasError('required') ? 'Please enter your contact' : '';
    this.genderErrorMessage = this.gender.hasError('required') ? 'Please enter your gender' : '';

    if (!(this.userName.invalid && this.email.invalid && this.dob.invalid && this.contact.invalid && this.gender.invalid)) {

      //this.ErrorMessage = (this.password.value != this.confirmPassword.value) ? 'Passwords do not match. Please re type your Password and Confirm Password.' : '';

      //if (this.password.value == this.confirmPassword.value) {

      var user = new User();
      user.gender = this.gender.value;
      user.name = this.userName.value;
      user.dateOfBirth = (new Date(this.dob.value)).toLocaleDateString();
      user.email = this.email.value;
      user.phone = this.contact.value;
      user.createdBy = "Mrinmoyee Sinha";
      user.createdDate = (new Date()).toLocaleString();
      user.modifiedBy = "Mrinmoyee Sinha";
      user.modifiedDate = (new Date()).toLocaleString();
      user.isActive = true;

      this.userService.saveUser(user)
        .subscribe(
          res => {
            this.alertService.success('User has been added successfully', this.options);
            this.router.navigate(['admin/manageUsers/view']);
          }, err => {
            this.alertService.error('An error occured', this.options);
          }
        );;
      //}

    }
  }

  OnCancel() {
    this.router.navigate(['admin/manageUsers/view']);
  }
}
