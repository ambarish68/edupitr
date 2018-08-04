export class ResourceModel {
    public title: String;
    public author: String;
    public text: String;
    constructor(title: String, author: string, text: String) {
        this.title = title;
        this.author = author;
        this.text = text;
    }
}