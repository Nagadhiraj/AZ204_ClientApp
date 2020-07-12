import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    ChartsComponent, 
    ProfileComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: [
  ]
})
export class UserModule { }
