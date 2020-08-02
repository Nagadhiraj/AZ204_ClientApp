import { Component, OnInit, EventEmitter } from '@angular/core';
import { ChartQuery, ChartEntity, AttachmentEntity } from '../../../../models/chart';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../services/Userservice.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { Guid } from '../../../../models/guidGenerator';
import { Router } from '@angular/router';
import { ChartService } from '../../../../services/chartservice.service';
import { FormControl, Validators } from '@angular/forms';
import { AlertService } from '../../../../ui/_alert/alert.service';

@Component({
  selector: 'app-user-charts',
  templateUrl: './user-charts.component.html',
  styleUrls: ['./user-charts.component.css']
})

export class UserChartsComponent implements OnInit {
  modules = {};
  editorStyle = {};
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  public selectedFilesToBeUploaded : AttachmentEntity[] = [];

  charts: Array<ChartEntity> = [];
  chart: ChartQuery;
  loader: boolean = false;
  viewChart: boolean = false;
  errMessage: string;
  pageOfItems: Array<any>;

  chartNameErrorMessage: String;
  chartRemarkErrorMessage: String;
  chartMailSubjectErrorMessage: String;
  chartMailBodyErrorMessage: String;
  ErrorMessage: String;

  chartName = new FormControl('', [Validators.required]);
  chartRemark = new FormControl('', [Validators.required]);
  chartMailSubject = new FormControl('', [Validators.required]);
  chartMailBody = new FormControl('', [Validators.required]);
  userId: string = '';
  username: string = '';
  email: string ='';
  phone: string='';
  isDisabled: boolean = false;

  allowedFileTypes : string[] = ['application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document','image/jpeg','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

  constructor(private router: Router,private chartService : ChartService, private userService: UserService, 
    private alertService: AlertService) {
    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-toolbar': true,
      'toolbar': [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video'],                         // link and image, video
        ['emoji']

      ]
    }
    this.editorStyle = {
      height : '400px',
    }
    
  }
  
  ngOnInit() {
    this.userId = this.userService.userId;
    this.username = this.userService.username;
    this.email = this.userService.email;
    this.phone = this.userService.phone;

    if (this.userId == undefined) {
      this.router.navigate(['admin/manageUsers/view']);
    }
    this.fetchUserCharts();
    this.selectedFilesToBeUploaded = [];
  }

  public uploader: FileUploader = new FileUploader({
    //url: URL,
    disableMultipart : false,
    //autoUpload: true,
    //method: 'post',
    //itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf', 'docx', 'doc', 'jpeg', 'png', 'xlsx', 'csv']


    });


public uploadDocuments(){
  if(this.selectedFilesToBeUploaded.length > 0){

  }
}


  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    
    console.log(file);
    if(file != undefined && this.allowedFileTypes.includes(file.type)){
      this.getBase64(file).then((base64string: string) => {
        this.selectedFilesToBeUploaded.push({
          Base64String: base64string.split(',')[1].toString(),
          ContainerName: 'chart',
          FileSize: file.size.toString(),
          Name: file.name,
          Path: '',
          ContentType: file.type,
          uId: Guid.newGuid()
        })
        //console.log(this.selectedFilesToBeUploaded);
      });
    }
    else{
      // Please choose different file type. Allowed Types are PDF, DOCX, DOC, JPEG, PNG, EXCEL
    }
  }

public onFileRemove(doc: any){
  this.selectedFilesToBeUploaded = this.selectedFilesToBeUploaded.filter(f => f.uId != doc.uId)
}

  private getBase64(file) {
    return new Promise((resolve, reject)=> {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error); 
    })
    
 }

 OnCancel() {
  this.router.navigate(['admin/manageUsers/view']);
}

fetchUserCharts() {
  var query: ChartQuery = new ChartQuery();
  query.queryParameter = 'findbyuserid';
  query.userId = this.userId;
  this.charts = [];
  this.loader = true;
  this.chartService.saveOrFetchChart(query).subscribe(
    data => {
      this.loader = false;
      this.charts = data;
      //console.log(this.articles);
    },
    err => {
      //console.log(err);
      this.errMessage = err;
      this.loader = false;
    }
  );
}

fnviewChart(chart: any){
  this.viewChart = true;
  this.chart = chart;
}

fnAddChart(){
  this.viewChart = true;
  this.selectedFilesToBeUploaded = [];
  this.chart = new ChartQuery();
}

onRefresh() {
  this.fetchUserCharts();
}

onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

OnSendChart(){
  
  this.chartNameErrorMessage = this.chartName.hasError('required') ? 'Please enter the chart name' : '';
  this.chartRemarkErrorMessage = this.chartRemark.hasError('required') ? 'Please enter the chart remark' : '';
  this.chartMailSubjectErrorMessage = this.chartMailSubject.hasError('required') ? 'Please enter the chart mail subject' : '';
  this.chartMailBodyErrorMessage = this.chartMailBody.hasError('required') ? 'Please enter the chart mail body' : '';


  if (!(this.chartName.invalid && this.chartRemark.invalid && this.chartMailSubject.invalid && this.chartMailBody.invalid)) {

    var chart : ChartQuery = new ChartQuery();
    chart.name = this.chart.name;
    chart.remarks = this.chart.remarks;
    chart.mailsubject = this.chart.mailsubject;
    chart.mailcontent = this.chart.mailcontent;
    chart.userId = this.userId;
    chart.username = this.username;
    chart.email = this.email;
    chart.phone = this.phone;
    chart.createdBy = "Mrinmoyee Sinha";
    chart.createdDate = (new Date()).toLocaleString();
    chart.modifiedBy = "Mrinmoyee Sinha";
    chart.modifiedDate = (new Date()).toLocaleString();
    chart.isActive = true;
    chart.queryParameter = 'addchart';
    chart.chartAttachments = this.selectedFilesToBeUploaded;

    console.log(chart);

  this.chartService.saveOrFetchChart(chart)
  .subscribe(
    res => {
      this.alertService.success('Mail has been sent successfully.', this.options);
      this.fetchUserCharts();
      this.selectedFilesToBeUploaded = []
      this.isDisabled = false;
      this.viewChart = false;
    }, err => {
      this.selectedFilesToBeUploaded = []
      this.alertService.error('An error occured', this.options);
    }
  );

  }
}

close(){
  this.viewChart = false;
  this.chart = new ChartQuery();
}

scroll(el: HTMLElement) {
  el.scrollIntoView();
}

}
