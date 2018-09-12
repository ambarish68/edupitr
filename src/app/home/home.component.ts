import { Component, OnInit } from '@angular/core';
import { SuccessStoriesService } from '../successstories.service';
import { SuccessStoryModel } from './successstory.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public successStoriesService: SuccessStoriesService;
  public successStories: SuccessStoryModel[];
  constructor() {
    this.successStoriesService = new SuccessStoriesService();
  }

  ngOnInit() {
    this.successStories = this.successStoriesService.getSuccessStories();
  }

}
