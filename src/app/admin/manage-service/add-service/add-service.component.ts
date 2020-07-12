import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../../../models/service';
import { Router } from '@angular/router';
import { ServiceService } from '../../../services/Serviceservice.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  serviceNameErrorMessage: String;
  shortInfoErrorMessage: String;
  contentErrorMessage: String;
  ErrorMessage: String;

  serviceName = new FormControl('', [Validators.required]);
  shortInfo = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);

  constructor(private serviceservice: ServiceService, private router: Router) { }

  ngOnInit() {
  }
  OnSaveService() {

    this.serviceNameErrorMessage = this.serviceName.hasError('required') ? 'Please enter the service name' : '';
    this.shortInfoErrorMessage = this.shortInfo.hasError('required') ? 'Please enter the short Information' : '';
    this.contentErrorMessage = this.content.hasError('required') ? 'Please re-enter your Password' : '';
    

    if (!(this.serviceName.invalid && this.shortInfo.invalid && this.content.invalid)) {


      const service = new Service(this.serviceName.value, 1, this.shortInfo.value, this.content.value);


      this.serviceservice.saveService(service)
          .subscribe(
            res => {
              this.ErrorMessage = 'Service added';
              this.router.navigate(['admin/manageServices/view']);
            }, err => {
              this.ErrorMessage = err.error.message;
            }
          );;
      

    }
  }


}
