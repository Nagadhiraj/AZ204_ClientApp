import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../models/service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private httpClient: HttpClient) { }
  services: Array<Service>;

  getServices() {
    //return this.httpClient.get<Array<Service>>('https://localhost:44305/api/service').pipe(
    return this.httpClient.get<Array<Service>>('/api/service').pipe(
      tap(
        services => {
          this.services = services;
        }
      )
    );
  }

  saveService(data) {
    //return this.httpClient.post('https://localhost:44305/api/service', data);
    return this.httpClient.post('/api/service', data);
  }

  updateService(service, serviceId) {
    //return this.httpClient.post(`https://localhost:44305/api/service/${serviceId}`, service);
    return this.httpClient.post(`/api/service/${serviceId}`, service);
  }

  getServiceById(serviceId): Service {
    console.log(this.services);
    const service = this.services.find(service => service.serviceId == serviceId);
    return Object.assign({}, service);
  }
}
