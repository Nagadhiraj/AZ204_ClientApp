import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../services/Serviceservice.service';
import { AuthserviceService } from '../../services/authservice.service';
import { Service } from '../../models/service';
import { Router } from '@angular/router';
//import { MsalService } from '@azure/msal-angular';
import { UserService } from '../../services/Userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  notLoggedIn: boolean;
  userLoggedIn: boolean;
  adminLoggedIn: boolean;
  login: boolean;
  ErrorMessage: String;
  services: Array<Service>;
  token: string;
  role: string;
  isDisabled: boolean = false;
  loggedInUser: any;

  constructor(private _serviceService: ServiceService,
    private _authService: AuthserviceService,
    private _router: Router,
    private _userService: UserService,
    //private msalService: MsalService
    ) {
    
  }

  ngOnInit() {
      this.notLoggedIn = true;
  }

}
