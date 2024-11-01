export class Post {
    readonly postId?: number;
    readonly title: string;
    readonly pathToFile: string;
    readonly favorites: number;



    constructor(post: {
        postId?: number;
        title: string;
        pathToFile: string;
        favorites: number;

    } ) {

        this.postId = post.postId
        this.title = post.title
        this.pathToFile = post.pathToFile
        this.favorites = post.favorites
        
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
}