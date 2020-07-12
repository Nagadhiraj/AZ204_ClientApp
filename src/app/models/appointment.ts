export class Appointment {
    
    appointmentId: Number;
    appointmentDate: Date;
    timeSlotId: Number;
    userId: Number;
  
    constructor(appointmentDate, timeSlotId, userId) {
      this.appointmentDate = appointmentDate;
      this.timeSlotId = timeSlotId;
      this.userId = userId;
    }
  }