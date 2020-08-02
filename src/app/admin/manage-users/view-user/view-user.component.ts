import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/Userservice.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../ui/_alert/alert.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  loader: boolean = false;
  public deleteUser: User = new User();
  public isDisabled: boolean = false;
  public searchText: string;
  pageOfItems: Array<any>;
  constructor(private userService: UserService, private router: Router,
    private alertService: AlertService ) {
    
  }
  
  users: Array<User> = [];
  errMessage: string;


  ngOnInit() {
    this.fetchusers();
  }

  fetchusers() {
    this.users = [];
    this.loader = true;
    this.userService.getUsers().subscribe(
      data => {
        this.loader = false;
        this.users = data;
      },
      err => {
        console.log(err);
        this.errMessage = err;
        this.loader = false;
      }
    );
  }

  fneditUser(user: User) {
    console.log(user)
    this.userService.userId = user.id.toString();
    this.userService.username = user.name.toString();
    this.userService.email = user.email.toString();
    this.userService.phone = user.phone.toString();
    this.router.navigate(['admin/manageUsers/edit/editUser']);
  }

  onDelete(user: User) {
    this.deleteUser = user;
  }

  fndeleteUser(user: User) {
    this.isDisabled = true;
    user.isActive = false;
    user.modifiedBy = "Mrinmoyee Sinha";
    user.modifiedDate = (new Date()).toLocaleString();
    this.userService.updateUser(user)
      .subscribe(
        res => {
          this.alertService.success('User has been deleted successfully', this.options);
          this.fetchusers();
          this.isDisabled = false;
          this.deleteUser = new User();
        },
        err => {
          this.alertService.error('An error occured', this.options);
          this.isDisabled = false;
          this.deleteUser = new User();
        }
      );
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onRefresh() {
    this.fetchusers();
  }

  onAdd() {
    this.router.navigate(['admin/manageUsers/add']);
  }
}
