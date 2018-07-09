import { SuccessStoryModel } from "../home/successstory.model";
//import * as data from "../../assets/data/successstories.json";
import * as stories from "../../assets/data/successstories.json";
declare function require(name:string);

export class SuccessStoriesService {
    
    public successStories:SuccessStoryModel[]=[];

    constructor() { 
        for(var i=0;i<stories.default.length;i++){
            this.successStories.push(new SuccessStoryModel(
                stories.default[i].name,
                stories.default[i].admits,
                stories.default[i].feedback,
                stories.default[i].imageURL
            ))
        }
    }
}