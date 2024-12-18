import { Comment as CommentPrisma } from '@prisma/client';

export class Comment {
    private id?: number;
    private text: string;
    private postId?: number;

    constructor(comment: {
        id?: number;
        text: string;
        postId?: number;
    }) {
        this.validate(comment);

        this.id = comment.id
        this.text = comment.text
        this.postId = comment.postId
    }

    validate(comment: { id?: number; text: string; }) {
        if (!comment.text || comment.text.length === 0) {
            throw new Error("Text is required");
        }

        if (comment.text.length < 3) {
            throw new Error("Text must be at least 3 characters long");
        }
    }

    getId() {
        return this.id;
    }

    getText() {
        return this.text;
    }

    getPostId() {
        return this.postId;
    }

    equals(comment: Comment): boolean {
        return (
            this.id === comment.getId() &&
            this.text === comment.getText() &&
            this.postId === comment.getPostId()
        );
    }

    static from({ id, text, postId }: CommentPrisma ) {
        return new Comment({
            id,
            text,
            postId,
        })
    }
}