export class AppointmentEntity {
    
  id : string; 
  date : string;
  from : string;
  to : string;
  userId : string;
  username : string;
  phone : string;
  email : string;
  isActive : boolean;
  isAvailable : boolean;
  createdBy : string;
  createdDate : string;
  modifiedBy : string;
  modifiedDate : string;
  
}

export class AppointmentQuery {
    id : string;   
    date : string;
    from : string;
    to : string;
    userId : string;
    username : string;
    phone : string;
    email : string;
    isActive : boolean;
    isAvailable : boolean;
    createdBy : string;
    createdDate : string;
    modifiedBy : string;
    modifiedDate : string;
    queryParameter : string;

}