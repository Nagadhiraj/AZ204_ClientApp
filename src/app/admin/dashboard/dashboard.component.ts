import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/Userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(
    private _userService: UserService,) { }

  ngOnInit() {
  }

}
