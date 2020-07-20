import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { HomeViewServiceComponent } from './service/home-view-service/home-view-service.component';
import { HomeViewArticleComponent } from './articles/home-view-articles/home-view-articles.component';
import { HomeLayoutComponentComponent } from './home-layout-component/home-layout-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponentComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }, // default route of the module
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            component: ServiceComponent
          },
          {
            path: 'view/:serviceId',
            component: HomeViewServiceComponent
          }
        ]
      },
      {
        path: 'articles',
        children: [
          {
            path: '',
            component: ArticlesComponent
          },
          {
            path: 'view',
            component: HomeViewArticleComponent
          }
        ]
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];


export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
