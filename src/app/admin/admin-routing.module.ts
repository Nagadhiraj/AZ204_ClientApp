import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { ManageTestimonialsComponent } from './manage-testimonials/manage-testimonials.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageMessagesComponent } from './manage-messages/manage-messages.component';
import { AddArticleComponent } from './manage-articles/add-article/add-article.component';
import { EditArticleComponent } from './manage-articles/edit-article/edit-article.component';
import { ViewArticleComponent } from './manage-articles/view-article/view-article.component';
import { AddServiceComponent } from './manage-service/add-service/add-service.component';
import { EditServiceComponent } from './manage-service/edit-service/edit-service.component';
import { ViewServiceComponent } from './manage-service/view-service/view-service.component';
import { AddUserComponent } from './manage-users/add-user/add-user.component';
import { EditUserComponent } from './manage-users/edit-user/edit-user.component';
import { ViewUserComponent } from './manage-users/view-user/view-user.component';

import { UserAppointmentsComponent } from './manage-users/edit-user/user-appointments/user-appointments.component';
import { UserDetailsComponent } from './manage-users/edit-user/user-details/user-details.component';
import { UserChartsComponent } from './manage-users/edit-user/user-charts/user-charts.component';
import { AdminLayoutComponentComponent } from './admin-layout-component/admin-layout-component.component';

const routes: Routes = [ // default route of the module
  {
    path: '',
    component: AdminLayoutComponentComponent,
    children: [


      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manageappointments', component: AppointmentsComponent },
      {
        path: 'manageArticles', component: ManageArticlesComponent,
        children: [
          {
            path: '',
            component: ViewArticleComponent
          },
          {
            path: 'add',
            component: AddArticleComponent
          },
          {
            path: 'edit/:articleId/editArticle',
            component: EditArticleComponent
          },
          {
            path: 'view',
            component: ViewArticleComponent
          }
        ]
      },
      {
        path: 'manageServices', component: ManageServiceComponent,
        children: [
          {
            path: '',
            component: ViewServiceComponent
          },
          {
            path: 'add',
            component: AddServiceComponent
          },
          {
            path: 'edit/:serviceId/editService',
            component: EditServiceComponent
          },
          {
            path: 'view',
            component: ViewServiceComponent
          }
        ]
      },
      { path: 'manageTestimonials', component: ManageTestimonialsComponent },
      {
        path: 'manageUsers', component: ManageUsersComponent,
        children: [
          {
            path: '',
            component: ViewUserComponent
          },
          {
            path: 'add',
            component: AddUserComponent
          },
          {
            //path: 'edit/:userId/editUser',
            path: 'edit/editUser',
            component: EditUserComponent,
            children: [
              {
                path: '',
                component: UserDetailsComponent
              },
              //{
              //  path: 'details',
              //  component: UserDetailsComponent,

              //},
              {
                path: 'appointments',
                component: UserAppointmentsComponent
              },
              {
                path: 'charts',
                component: UserChartsComponent
              }
            ]
          },
          {
            path: 'view',
            component: ViewUserComponent
          },
          {
            path: '**',
            component: ViewUserComponent
          },
        ]
      },
      { path: 'manageMessages', component: ManageMessagesComponent },
      {
        path: '**',
        redirectTo: '/admin'
      },
    ]
  }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
