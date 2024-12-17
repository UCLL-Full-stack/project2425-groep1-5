export class Post {
    readonly postId?: number;
    readonly title: string;
    readonly pathToFile: string;
    readonly favorites: number;

    constructor(post: { postId?: number; title: string; pathToFile: string; favorites: number; }) {
        this.validate(post);
        this.postId = post.postId
        this.title = post.title
        this.pathToFile = post.pathToFile
        this.favorites = post.favorites
    }

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

    getPostId() {
        return this.postId;
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

    equals(post: Post): boolean {
        return (
            this.postId === post.getPostId() &&
            this.title === post.getTitle() &&
            this.pathToFile === post.getPathToFile() &&
            this.favorites === post.getFavorites()
        );
    }
}