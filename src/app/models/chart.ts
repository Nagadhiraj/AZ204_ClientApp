export class ChartEntity {
    
    id : string; 
    name : string;
    userId : string;
    username : string;
    phone : string;
    email : string;
    remarks: string;
    mailsubject: string;
    mailcontent:string;
    chartAttachments : AttachmentEntity[] = [];
    isActive : boolean;
    createdBy : string;
    createdDate : string;
    modifiedBy : string;
    modifiedDate : string;
    
}
  
export class ChartQuery {
    id : string; 
    name : string;
    userId : string;
    username : string;
    phone : string;
    email : string;
    remarks: string;
    mailsubject: string;
    mailcontent:string;
    chartAttachments : AttachmentEntity[] = [];
    isActive : boolean;
    createdBy : string;
    createdDate : string;
    modifiedBy : string;
    modifiedDate : string;
    queryParameter : string;
}

export class AttachmentEntity {
    Base64String: string;
    ContainerName: string;
    FileSize: string;
    Name: string;
    Path: string;
    ContentType: string;
    uId: string;
}