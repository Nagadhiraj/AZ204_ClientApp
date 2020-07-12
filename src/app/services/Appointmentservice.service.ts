import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { TimeSlot } from '../models/timeSlot';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) { }
  appointments: Array<Appointment>;
  timeSlots: Array<TimeSlot>;

  getAppointments() {
    //return this.httpClient.get<Array<Appointment>>('https://localhost:44305/api/appointment').pipe(
    return this.httpClient.get<Array<Appointment>>('/api/appointment').pipe(
      tap(
        appointments => {
          this.appointments = appointments;
        }
      )
    );
  }

  getAvailableTimeSlots(appDate) {
    //return this.httpClient.get<Array<TimeSlot>>(`https://localhost:44305/api/appointment/timeslot?appDate=${appDate}`).pipe(
    return this.httpClient.get<Array<TimeSlot>>(`/api/appointment/timeslot?appDate=${appDate}`).pipe(
      tap(
        timeSlots => {
          this.timeSlots = timeSlots;
        }
      )
    );
  }

  saveAppointment(data) {
    //return this.httpClient.post('https://localhost:44305/api/appointment', data);
    return this.httpClient.post('/api/appointment', data);
  }

  updateAppointment(appointment, appointmentId) {
    //return this.httpClient.post(`https://localhost:44305/api/appointment/${appointmentId}`, appointment);
    return this.httpClient.post(`/api/appointment/${appointmentId}`, appointment);
  }

  getAppointmentById(appointmentId): Appointment {
    const appointment = this.appointments.find(appointment => appointment.appointmentId == appointmentId);
    return Object.assign({}, appointment);
  }
}
