import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/Userservice.service';
//import * as CryptoJS from 'crypto-js';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  usernameErrorMessage: string;
  emailErrorMessage: string;
  dateOfBirthErrorMessage: string;
  contactErrorMessage: string;
  genderErrorMessage: string;
  ErrorMessage: string;
  loader: boolean = false;

  username = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);;
  email = new FormControl('', [Validators.required]);
  dateOfBirth = new FormControl('', [Validators.required]);
  contact = new FormControl('', [Validators.required]);
  Address = new FormControl('');
  State = new FormControl('');
  City = new FormControl('');
  Zip = new FormControl('');
  Height = new FormControl('');
  Weight = new FormControl('');
  PresentIssues = new FormControl('');
  PastIssues = new FormControl('');
  FamilyHistoryIssues = new FormControl('');
  FoodChoices = new FormControl('');
  Allergy = new FormControl('');
  Medication = new FormControl('');
  SleepTime = new FormControl('');
  FoodTime = new FormControl('');
  DayToDayActivities = new FormControl('');
  RecModifiedBy = new FormControl('');

  constructor(private userDetailService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  errMessage: string;
  userDetail: User = new User();
  userID: String;

  ngOnInit() {
    //var userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.fetchUserDetail();
  }

  fetchUserDetail() {
    var userId = this.userDetailService.userId;
    if (userId == undefined) {
      this.router.navigate(['admin/manageUsers/view']);
    }
    this.loader = true;
    this.userID = userId;
    this.userDetailService.getUserById(userId).subscribe(
      data => {
        this.loader = false;
        this.userDetail = data;
        this.dateOfBirth = new FormControl(this.userDetail.dateOfBirth, [Validators.required]);
      },
      err => {
        this.loader = false;
        console.log(err);
        this.errMessage = err;
      }
    );
  }

  OnSave() {

    this.usernameErrorMessage = this.username.hasError('required') ? 'Please enter the username' : '';
    this.genderErrorMessage = this.username.hasError('required') ? 'Please enter the gender' : '';
    this.emailErrorMessage = this.email.hasError('required') ? 'Please enter the email ID' : '';
    this.dateOfBirthErrorMessage = this.dateOfBirth.hasError('required') ? 'Please enter the Date of Birth' : '';
    this.contactErrorMessage = this.contact.hasError('required') ? 'Please enter the contact details' : '';


    if (!(this.username.invalid && this.email.invalid && this.dateOfBirth.invalid && this.contact.invalid && this.gender.invalid)) {


      var userDetails = new User();
      userDetails.id = this.userDetail.id;
      userDetails.name = this.username.value;
      userDetails.gender = this.gender.value;
      userDetails.email = this.email.value;
      userDetails.dateOfBirth = (new Date(this.dateOfBirth.value)).toLocaleDateString();
      userDetails.phone = this.contact.value;
      userDetails.address = this.Address.value;
      userDetails.state = this.State.value;
      userDetails.city = this.City.value;
      userDetails.zip = this.Zip.value;
      userDetails.height = this.Height.value;
      userDetails.weight = this.Weight.value;
      userDetails.presentIssues = this.PresentIssues.value;
      userDetails.pastIssues = this.PastIssues.value;
      userDetails.familyHistoryIssues = this.FamilyHistoryIssues.value;
      userDetails.foodChoices = this.FoodChoices.value;
      userDetails.allergy = this.Allergy.value;
      userDetails.medication = this.Medication.value;
      userDetails.sleepTime = this.SleepTime.value;
      userDetails.foodTime = this.FoodTime.value;
      userDetails.dayToDayActivities = this.DayToDayActivities.value;
      userDetails.modifiedBy = "Mrinmoyee Sinha";
      userDetails.modifiedDate = (new Date()).toLocaleString();
      userDetails.isActive = true;
      this.userDetailService.updateUser(userDetails)
        .subscribe(
          res => {
            this.ErrorMessage = 'User Details updated';
            this.router.navigate(['admin/manageUsers/view']);
          }, err => {
            this.ErrorMessage = err.error.message;
          }
        );


    }
  }

  OnCancel() {
    this.router.navigate(['admin/manageUsers/view']);
  }


}
