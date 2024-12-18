import { Post } from '../model/post';

const posts = [
    new Post({
        id: 1,
        title: 'First Post',
        pathToFile: '/path/to/file1.jpg',
        favorites: 5,
    }),
    new Post({
        id: 2,
        title: 'Second Post',
        pathToFile: '/path/to/file2.jpg',
        favorites: 3,
    }),
];

const addPost = (postInput: { postId: number; title: string; pathToFile: string; favorites: number; }): Post => {
    

    const newPost = new Post(postInput);
    posts.push(newPost);
    return newPost;
};


const getAllPosts = (): Post[] => {
    return posts;
};


export default {
    getAllPosts,
    addPost
};


// const isValidFilePath = (path: string): boolean => {
//     const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
//     const extension = path.slice(path.lastIndexOf('.')).toLowerCase();
//     return validExtensions.includes(extension);
// };

// const addPost = (postInput: { postId: number; title: string; pathToFile: string; favorites: number; }): Post => {
//     if (!postInput.title) {
//         throw new Error('Title is required');
//     }
//     if (!postInput.pathToFile || !isValidFilePath(postInput.pathToFile)) {
//         throw new Error('A valid path to file is required');
//     }

//     const newPost = new Post(postInput);
//     posts.push(newPost);
//     return newPost;
// };