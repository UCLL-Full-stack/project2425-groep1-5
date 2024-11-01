export class Comment {
    readonly commentId? : number;
    readonly text : string;



    constructor(comment: {
        commentId? : number;
        text : string;

    } ) {

        this.commentId = comment.commentId
        this.text = comment.text
        
    }

    getCommentId() {
        return this.commentId;
    }

    getText() {
        return this.text;
    }

    equals(comment: Comment):boolean {
        return (
        this.commentId === comment.getCommentId() &&
        this.text === comment.getText()
    );
}
}