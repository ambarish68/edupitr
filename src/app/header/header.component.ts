import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NGXLogger]
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  constructor(private logger: NGXLogger) {
  }

  ngOnInit() {
  }

}
