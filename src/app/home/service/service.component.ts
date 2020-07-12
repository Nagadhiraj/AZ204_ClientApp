import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';
import { ServiceService } from '../../services/Serviceservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

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
