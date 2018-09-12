import { Component, OnInit } from '@angular/core';
import { SuccessStoryModel } from '../home/successstory.model';
import { SuccessStoriesService } from '../successstories.service';

@Component({
  selector: 'app-successstories',
  templateUrl: './successstories.component.html',
  styleUrls: ['./successstories.component.css']
})
export class SuccessstoriesComponent implements OnInit {
  public successStoriesService: SuccessStoriesService;
  public successStories: SuccessStoryModel[];

  constructor() {
    this.successStoriesService = new SuccessStoriesService();
  }

  ngOnInit() {
    this.successStories = this.successStoriesService.getSuccessStories();
  }

}
