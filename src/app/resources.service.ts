import * as resources from "../assets/data/resources.json";
import { ResourceModel } from './resources/resource.model';
declare function require(name:string);

export class ResourceService {
    
    public resources:ResourceModel[]=[];

    constructor() { 
        if(this.resources==null || this.resources.length==0){
            for(var i=0;i<resources.default.length;i++){
                this.resources.push(new ResourceModel(
                    resources.default[i].title,
                    resources.default[i].author,
                    resources.default[i].text
                ))
            }
        }
    }

    public getResources():ResourceModel[]{
        return this.resources;
    }
}