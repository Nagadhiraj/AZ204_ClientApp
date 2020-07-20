import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { ProfileComponent } from './profile/profile.component';

import { CanActivateRouteGuard } from '../can-activate-route.guard';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    canActivate : [CanActivateRouteGuard] 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate : [CanActivateRouteGuard]
  },
  { 
    path: 'charts', 
    component: ChartsComponent,
    canActivate : [CanActivateRouteGuard]
  },
  { 
    path: 'profile', 
    component: ProfileComponent ,
    canActivate : [CanActivateRouteGuard]
  }
];



export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
