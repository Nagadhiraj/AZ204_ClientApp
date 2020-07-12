import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../services/Userservice.service';

@Component({
  selector: 'app-user-charts',
  templateUrl: './user-charts.component.html',
  styleUrls: ['./user-charts.component.css']
})
export class UserChartsComponent implements OnInit {

  constructor() {
    
  }
  
 

  ngOnInit() {
  }

}
