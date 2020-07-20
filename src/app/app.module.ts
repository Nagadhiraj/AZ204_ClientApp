import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from '../../../HFClientApp/src/app/ui/header/header.component';
//import { FooterComponent } from '../../../HFClientApp/src/app/ui/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppointmentService } from './services/Appointmentservice.service';
import { JumbotronService } from './services/Jumbotronservice.service';
import { ServiceService } from './services/Serviceservice.service';
import { UserService } from './services/Userservice.service';
import { AuthserviceService } from './services/authservice.service';

import { CanActivateRouteGuard } from './can-activate-route.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MsalModule.forRoot({
      auth: {
        clientId: environment.clientId, 
        authority: environment.authority, 
        redirectUri: environment.redirectUri,
        postLogoutRedirectUri: environment.postLogoutRedirectUri,
        validateAuthority: false
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: environment.isIE, // Set to true for Internet Explorer 11
      },
    }, {
        popUp: !environment.isIE,
        consentScopes: environment.consentScopes1,
        unprotectedResources: environment.unprotectedResources,
        protectedResourceMap: [
          [environment.webApi1, environment.consentScopes1]
        ],
        extraQueryParameters: {}
      })
  ],
  providers: [
    ServiceService,
    AppointmentService,
    JumbotronService,
    UserService,
    AuthserviceService,
    CanActivateRouteGuard,
    { provide: LOCALE_ID, useValue: "en-GB" },
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
