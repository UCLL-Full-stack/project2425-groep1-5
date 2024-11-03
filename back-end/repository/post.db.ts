import { Post } from '../model/post';

const posts = [
    new Post({
        postId: 1,
        title: 'First Post',
        pathToFile: '/path/to/file1.jpg',
        favorites: 5,
    }),
    new Post({
        postId: 2,
        title: 'Second Post',
        pathToFile: '/path/to/file2.jpg',
        favorites: 3,
    }),
];

const getAllPosts = (): Post[] => {
    return posts;
};


export default {
    getAllPosts
};