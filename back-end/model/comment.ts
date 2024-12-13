export class Comment {
    readonly commentId? : number;
    readonly text : string;



    constructor(comment: {commentId? : number; text : string;} ) {
        this.validate(comment);
        this.commentId = comment.commentId
        this.text = comment.text
        
    }

    validate(comment: { commentId?: number; text: string; }) {
        if (!comment.text || comment.text.length === 0) {
            throw new Error("Text is required");
        }

        if (comment.text.length < 5) {
            throw new Error("Text must be at least 5 characters long");
        }
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