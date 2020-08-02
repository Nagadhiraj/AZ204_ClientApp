import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../services/Userservice.service';
import {AppointmentService} from '../../../../services/Appointmentservice.service'
import {AppointmentEntity, AppointmentQuery} from '../../../../models/appointment';
import { Router } from '@angular/router';
import { AlertService } from '../../../../ui/_alert/alert.service';


@Component({
  selector: 'app-user-appointments',
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.css']
})
export class UserAppointmentsComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  loader: boolean = false;
  searchloader:boolean=false;
  public unallocateAppointment: AppointmentEntity = new AppointmentEntity();
  public allocateAppointment: AppointmentEntity = new AppointmentEntity();
  public isDisabled: boolean = false;
  public searchText: string;
  pageOfItems: Array<any>;
  
  userAppointments: Array<AppointmentEntity> = [];
  newAppointments: Array<AppointmentEntity> = [];
  errMessage: string;

  addPanel: boolean = false;
  viewappointments: boolean=false;
  date: string = "";
  userId: string = '';
  username: string = '';
  email: string ='';
  phone: string='';

  constructor(private userService: UserService, 
    private router: Router, 
    private appointmentService : AppointmentService,
    private alertService: AlertService) {

  }

  ngOnInit() {
    this.userId = this.userService.userId;
    this.username = this.userService.username;
    this.email = this.userService.email;
    this.phone = this.userService.phone;

    if (this.userId == undefined) {
      this.router.navigate(['admin/manageUsers/view']);
    }
    this.fetchAppointmentsForUser();
  }

  fetchAppointmentsForUser() {
    var query: AppointmentQuery = new AppointmentQuery();
    query.queryParameter = 'findbyuserid';
    query.userId = this.userId;
    this.userAppointments = [];
    this.loader = true;
    this.appointmentService.saveOrFetchAppointment(query).subscribe(
      data => {
        this.loader = false;
        this.userAppointments = data;
      },
      err => {
        console.log(err);
        this.errMessage = err;
        this.loader = false;
      }
    );
  }

  fetchAppointmentsByDate() {
    
    var doa = (new Date(this.date)).toLocaleDateString()

    var query: AppointmentQuery = new AppointmentQuery();
    query.queryParameter = 'findbydate';
    query.date = doa;
    this.newAppointments = [];
    this.searchloader = true;
    this.appointmentService.saveOrFetchAppointment(query).subscribe(
      data => {
        this.searchloader = false;
        this.viewappointments = true;
        this.newAppointments = data;
      },
      err => {
        console.log(err);
        this.errMessage = err;
        this.searchloader = false;
      }
    );
  }

  onUnallocate(appointment: AppointmentEntity) {
    this.unallocateAppointment = appointment;
  }

  fnUnallocate(appointment: AppointmentEntity) {

    // unallocate appointment // update appointment and make available
    // how appointment will be updated depends on todays date and appointment date
    // if appointment date is in future active - true , available - true, userid - null , username - null

    this.isDisabled = true;
    appointment.isActive = true;
    appointment.isAvailable = true;
    appointment.userId = null;
    appointment.username = null;
    appointment.email = null;
    appointment.phone = null;
    appointment.modifiedBy = "Mrinmoyee Sinha";
    appointment.modifiedDate = (new Date()).toLocaleString();
    this.appointmentService.updateAppointment(appointment)
      .subscribe(
        res => {
          this.alertService.success('Appointment has been unallocated successfully', this.options);
          this.fetchAppointmentsForUser();
          this.isDisabled = false;
        },
        err => {
          console.log(err);
          this.alertService.error('An error occured', this.options);
          this.isDisabled = false;
        }
      );
  }

  onAllocate(appointment: AppointmentEntity) {
    this.allocateAppointment = appointment;
  }

  fnAllocate(appointment: AppointmentEntity) {

    // allocate appointment // update appointment and make available false
    // update appointment with userid and username

    this.isDisabled = true;
    appointment.userId = this.userId;
    appointment.username = this.username;
    appointment.email = this.email;
    appointment.phone = this.phone;
    appointment.isActive = true;
    appointment.isAvailable = false;
    appointment.modifiedBy = "Mrinmoyee Sinha";
    appointment.modifiedDate = (new Date()).toLocaleString();
    this.appointmentService.updateAppointment(appointment)
      .subscribe(
        res => {
          this.alertService.success('Appointment has been allocated successfully', this.options);
          this.fetchAppointmentsForUser();
          this.isDisabled = false;
          this.addPanel = false;
        },
        err => {
          console.log(err);
          this.alertService.error('An error occured', this.options);
          this.isDisabled = false;
        }
      );
  }



  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;
  // }

  onRefresh() {
    this.fetchAppointmentsForUser();
  }

  onAdd() {
    // open a new panel
    //this.router.navigate(['admin/manageUsers/add']);
    this.addPanel = true;
  }

  close(){
    this.addPanel = false;
  }
}
