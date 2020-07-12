import { Component, OnInit } from '@angular/core';
import { Service } from '../../../models/service';
import { ServiceService } from '../../../services/Serviceservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view-service',
  templateUrl: './home-view-service.component.html',
  styleUrls: ['./home-view-service.component.css']
})
export class HomeViewServiceComponent implements OnInit {

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

}
