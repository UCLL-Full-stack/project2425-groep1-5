export class Tag {
    readonly tagId?: number;
    readonly title: string;
    readonly description: string;


    constructor(tag: {
        tagId?: number;
        title: string;
        description: string;
        

    } ) {

        this.tagId = tag.tagId
        this.title = tag.title
        this.description = tag.description
        
        
    }

    getTagId() {
        return this.tagId;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
}