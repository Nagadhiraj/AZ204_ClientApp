import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { HomeViewServiceComponent } from './service/home-view-service/home-view-service.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeViewArticleComponent } from './articles/home-view-articles/home-view-articles.component';
import { AboutComponent } from './about/about.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeLayoutComponentComponent } from './home-layout-component/home-layout-component.component';

import { HeaderComponent } from '../../../src/app/ui/header/header.component';
import { FooterComponent } from '../../../src/app/ui/footer/footer.component';
import { QuillModule} from 'ngx-quill';

@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    ArticlesComponent,
    AboutComponent,
    HomeViewServiceComponent,
    HomeViewArticleComponent,
    HomeLayoutComponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    DatePickerModule,
    HttpClientModule,
    routing,
    QuillModule
    //AdminModule
  ],
  entryComponents: [
    HomeViewServiceComponent,
    HomeViewArticleComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
