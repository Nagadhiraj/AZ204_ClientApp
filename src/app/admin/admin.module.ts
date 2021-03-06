import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './admin-routing.module';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { ManageTestimonialsComponent } from './manage-testimonials/manage-testimonials.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageMessagesComponent } from './manage-messages/manage-messages.component';
import { AddArticleComponent } from './manage-articles/add-article/add-article.component';
import { EditArticleComponent } from './manage-articles/edit-article/edit-article.component';
import { ViewArticleComponent } from './manage-articles/view-article/view-article.component';

import { AddUserComponent } from './manage-users/add-user/add-user.component';
import { EditUserComponent } from './manage-users/edit-user/edit-user.component';
import { ViewUserComponent } from './manage-users/view-user/view-user.component';
import { UserAppointmentsComponent } from './manage-users/edit-user/user-appointments/user-appointments.component';
import { UserDetailsComponent } from './manage-users/edit-user/user-details/user-details.component';
import { UserChartsComponent } from './manage-users/edit-user/user-charts/user-charts.component'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponentComponent } from './admin-layout-component/admin-layout-component.component';
import { QuillModule} from 'ngx-quill';
import { FilterPipe } from '../ui/filter/filter.pipe';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { FileUploadModule } from 'ng2-file-upload';
import { AlertModule } from '../ui/_alert/alert.module';

@NgModule({
  declarations: [
    AppointmentsComponent,
    ManageArticlesComponent,
    ManageTestimonialsComponent,
    ManageUsersComponent,
    ProfileComponent,
    DashboardComponent,
    ManageMessagesComponent,
    AddArticleComponent,
    EditArticleComponent,
    ViewArticleComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    UserAppointmentsComponent,
    UserChartsComponent,
    UserDetailsComponent,
    FilterPipe,
    JwPaginationComponent,
    AdminLayoutComponentComponent
  ],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePickerModule,
    QuillModule,
    FileUploadModule,
    AlertModule
  ],
  entryComponents: [
    AddArticleComponent,
    EditArticleComponent,
    ViewArticleComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent
  ],
  providers: [
  ]
})
export class AdminModule { }
