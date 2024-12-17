import { Comment } from './comment';
import { Tag } from "./tag";
import { User } from "./user";
import { Post as PostPrisma } from "@prisma/client";
import { Comment as CommentPrisma } from "@prisma/client";
import { Tag as TagPrisma } from "@prisma/client";

export class Post {
    private id?: number;
    private title: string;
    private pathToFile: string;
    private favorites: number;
    private userId: number;
    private comments: Comment[];
    private tags: Tag[];

    constructor(post: {
        id?: number;
        title: string;
        pathToFile: string;
        favorites: number;
        userId: number;
        comments: Comment[];
        tags: Tag[];
    }) {
        this.validate(post);

        this.id = post.id
        this.title = post.title
        this.pathToFile = post.pathToFile
        this.favorites = post.favorites
        this.userId = post.userId;
        this.comments = post.comments
        this.tags = post.tags
    };

    validate(post: { postId?: number; title: string; pathToFile: string; favorites: number; }) {
        if (!post.title || post.title.length === 0) {
            throw new Error("Title is required");
        }

        if (!post.pathToFile || post.pathToFile.length === 0) {
            throw new Error("Path to file is required");
        }

        if (typeof post.favorites !== 'number' || post.favorites < 0) {
            throw new Error("Favorites must be a non-negative number");
        }
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getPathToFile() {
        return this.pathToFile;
    }

    getFavorites() {
        return this.favorites;
    }

    getUserId() {
        return this.userId;
    }

    getComments() {
        return this.comments;
    }

    getTags() {
        return this.tags;
    }

    equals(post: Post): boolean {
        return (
            this.id === post.getId() &&
            this.title === post.getTitle() &&
            this.pathToFile === post.getPathToFile() &&
            this.favorites === post.getFavorites() &&
            this.userId === post.getUserId() &&
            this.comments === post.getComments() &&
            this.tags == post.getTags()
        );
    };

    static from({ id, title, pathToFile, favorites, userId, comments, tags }: PostPrisma & { comments: CommentPrisma[], tags: TagPrisma[] }) {
        return new Post({
            id,
            title,
            pathToFile,
            favorites,
            userId,
            comments: comments.map((comment) => Comment.from(comment)),
            tags: tags.map((tag) => Tag.from(tag))
        });
    };
}