import { Component, OnInit } from '@angular/core';
import { SuccessStoriesService } from '../header/successstories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public successStoriesService : SuccessStoriesService;
  constructor() { }

  ngOnInit() {
    this.successStoriesService=new SuccessStoriesService();
  }

}
