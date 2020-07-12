import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../services/Userservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-appointments',
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.css']
})
export class UserAppointmentsComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
  }

}
