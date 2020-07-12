import { Component, OnInit } from '@angular/core';
import { Service } from '../../../models/service';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../../services/Serviceservice.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  constructor(private serviceService: ServiceService) {
    this.serviceService.getServices().subscribe(
      data => this.services = data,
      err => {
        this.errMessage = err.error.message;
      }
    );
  }
  
  services: Array<Service>;
  errMessage: string;


  ngOnInit() {
  }

}
