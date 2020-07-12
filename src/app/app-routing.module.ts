import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MsalModule, MsalInterceptor, MsalGuard } from '@azure/msal-angular';
//import { AppComponent } from './app.component';

import { CanActivateRouteGuard } from './can-activate-route.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
    //canActivate: [MsalGuard]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    //canActivate: [MsalGuard]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canActivate: [MsalGuard]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [MsalGuard]
    //canActivate : [CanActivateRouteGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


