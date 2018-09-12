import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessstoriesComponent } from './successstories/successstories.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessstoriesComponent,
    ServicesComponent,
    AboutusComponent,
    FaqsComponent,
    ResourcesComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    LoggerModule.forRoot({serverLoggingUrl: environment.loggingEndpoint, level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
