import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactUsModel } from './contactus.model';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../../environments/environment';
import { AlertService } from '../alert.service';
import { AlertType } from '../alert/alert.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [NGXLogger]
})
export class ContactusComponent implements OnInit {

  model: ContactUsModel = new ContactUsModel();
  constructor(private logger: NGXLogger, private httpClient: HttpClient, private alertService: AlertService) { }

  ngOnInit() {
  }
  onSubmit() {
    try {
      this.logger.info(this.model);
      this.httpClient.post<ContactUsModel>(environment.contactUsEndpoint, this.model, httpOptions).subscribe(
        data => {
            this.alertService.alert(AlertType.Success, 'Information submitted successfully');
            this.logger.info('PUT Request is successful ', data);
        },
        error => {
            this.alertService.alert(AlertType.Error, 'Error submitting information, please try again later');
            this.logger.error((<Error>error).message);
        }
    );
    } catch (e) {
      this.logger.error((<Error>e).message);
    }
  }
}
