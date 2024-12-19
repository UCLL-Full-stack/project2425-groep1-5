import postDb from "../repository/post.db";
import { Post } from '../model/post';
import { PostInput } from '../types';
import {Comment} from "../model/comment";
import {Tag} from "../model/tag";

const getAllPosts = (): Post[] => {
    return postDb.getAllPosts();
};

const addPost = (postInput: PostInput): Post => {
    if (!postInput.title) {
        throw new Error('Title is required');
    }

    return postDb.addPost(postInput as { postId: number; title: string; pathToFile: string; favorites: number; userId: number, comments: Comment[], tags: Tag[] });
};

export default { getAllPosts, addPost };

// const addPost = ({ postId, title, pathToFile, favorites }: PostInput, role: string): Post => {
//     if (role !== 'admin') {
//         throw new Error('You are not authorized to add a post');
//     }

//     if (!title) {
//         throw new Error('Title is required');
//     }
//     if (!pathToFile) {
//         throw new Error('Path to file is required');
//     }
//     if (typeof postId !== 'number') {
//         throw new Error('Post ID must be a number');
//     }
//     if (typeof favorites !== 'number') {
//         throw new Error('Favorites must be a number');
//     }

//     const post = { postId, title, pathToFile, favorites };
//     return postDb.addPost(post);
// }


