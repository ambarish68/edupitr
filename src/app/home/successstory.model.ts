export class SuccessStoryModel {
    public imageURL:String;
    public name: String;
    public admits: String[];
    public feedback: String;
    constructor(name: String,admits: String[],feedback: String,imageURL: String) { 
        this.admits=admits;
        this.name=name;
        this.feedback=feedback;
        this.imageURL=imageURL;
    }
}