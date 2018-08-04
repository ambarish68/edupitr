import { Component, OnInit } from '@angular/core';
import { ResourceModel } from './resource.model';
import { ResourceService } from '../resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  public resources: ResourceModel[];
  public resourcesService: ResourceService;
  constructor() {
    this.resourcesService = new ResourceService();
  }

  ngOnInit() {
    this.resources = this.resourcesService.getResources();
    console.log(this.resources);
  }

}
