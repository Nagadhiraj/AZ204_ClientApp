import { Component, OnInit } from '@angular/core';
import { Service } from '../../../models/service';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../../services/Serviceservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private serviceService: ServiceService, private router: Router) {
    const serviceId = this.activatedRoute.snapshot.paramMap.get('serviceId');
    this.service = this.serviceService.getServiceById(serviceId);
    this.serviceid = serviceId;
  }
  service: Service;
  errMessage: String;
  serviceid: String;

  ngOnInit() {
  }

  serviceNameErrorMessage: String;
  shortInfoErrorMessage: String;
  contentErrorMessage: String;
  ErrorMessage: String;

  serviceName = new FormControl('', [Validators.required]);
  shortInfo = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);

  OnUpdateService() {

    this.serviceNameErrorMessage = this.serviceName.hasError('required') ? 'Please enter the service name' : '';
    this.shortInfoErrorMessage = this.shortInfo.hasError('required') ? 'Please enter the short Information' : '';
    this.contentErrorMessage = this.content.hasError('required') ? 'Please enter the content' : '';


    if (!(this.serviceName.invalid && this.shortInfo.invalid && this.content.invalid)) {


      const service = new Service(this.serviceName.value, 1, this.shortInfo.value, this.content.value);

      this.serviceService.updateService(service, this.serviceid)
        .subscribe(
          res => {
            this.ErrorMessage = 'Service Updated';
            this.router.navigate(['admin/manageServices/view']);
          }, err => {
            this.ErrorMessage = err.error.message;
          }
        );;


    }
  }

}
