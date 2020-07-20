import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
//import {Appointment} from '../../models/appointment';
import {AppointmentService} from '../../services/Appointmentservice.service';
import {ArticleService} from '../../services/Articleservice.service';
import {JumbotronService} from '../../services/Jumbotronservice.service';
import { Router } from '@angular/router';
import { TimeSlot } from '../../models/timeSlot';
import { Article } from '../../models/article';
import { Jumbotron } from 'src/app/models/jumbotron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  timeSlots: Array<TimeSlot>;
  appointmentDateErrorMessage: String;
  appointmentTimeErrorMessage: String;
  ErrorMessage: String;
  userLoggedIn: boolean;

  articles: Array<Article>;
  jumbotrons: Array<Jumbotron>;


  appointmentDate = new FormControl('', [Validators.required]);
  appointmentTime = new FormControl('', [Validators.required]);
  
  constructor(private _appointmentService: AppointmentService, private router:Router,
    private _articleService: ArticleService,private _jumbotronService: JumbotronService) { 

      
      //this._jumbotronService.getjumbotrons().subscribe(
      //  data => {this.jumbotrons = data},
      //  err => {
      //    this.ErrorMessage = err.error.message;
      //  }
      //);
      
      //this._articleService.getArticles().subscribe(
      //  data => this.articles = data,
      //  err => {
      //    this.ErrorMessage = err.error.message;
      //  }
      //);
    }

  ngOnInit() {
    this.userLoggedIn = false;
  }

  GetTimeSlots(appDate){
    appDate = appDate.getFullYear()  + "-" + (appDate.getMonth()+1) + "-" + appDate.getDate();
    //this._appointmentService.getAvailableTimeSlots(appDate).subscribe(
    //  res => {this.timeSlots = res}  
    //)  
  }


  OnSave() {

    //save function will only execute if user is logged in. Otherwise route to login component.

    //If logged in the below will be executed

    this.appointmentDateErrorMessage = this.appointmentDate.hasError('required') ? 'Please enter the appointment date' : '';
    this.appointmentTimeErrorMessage = this.appointmentTime.hasError('required') ? 'Please enter the appointment time' : '';
    

    if (!(this.appointmentDate.invalid && this.appointmentTime.invalid)) {

      // get userId of logged in user and pass it dynamically to appointment object
      //const appointment = new Appointment(this.appointmentDate.value, this.appointmentTime.value, 2);

      //this._appointmentService.saveAppointment(appointment)
      //    .subscribe(
      //      res => {
      //        this.ErrorMessage = 'Appointment added';
      //        // If user is normal user navigate to user dashboard
      //        // this.router.navigate(['user/dashboard']);
      //        // If user is admin navigate to admin appointment view UI
      //      }, err => {
      //        this.ErrorMessage = err.error.message;
      //      }
      //    );
      

    }
  }

}
