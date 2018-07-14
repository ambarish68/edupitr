import * as faqs from "../assets/data/faqs.json";
import { FAQModel } from './faqs/faq.model';
declare function require(name:string);

export class FAQService {
    
    public faqs:FAQModel[]=[];

    constructor() { 
        if(this.faqs==null || this.faqs.length==0){
            for(var i=0;i<faqs.default.length;i++){
                this.faqs.push(new FAQModel(
                    faqs.default[i].question,
                    faqs.default[i].answer
                ))
            }
        }
    }

    public getFAQs():FAQModel[]{
        return this.faqs;
    }
}