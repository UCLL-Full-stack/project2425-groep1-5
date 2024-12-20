import { Comment } from '../model/comment';


const comments: Comment[] = [
    new Comment({
        id: 1,
        text: "Wow.",
    }),
    new Comment({
        id: 2,
        text: "Nice second comment.",
    }),
    new Comment({
        id: 3,
        text: "third comment.",
    }),
];

const getAllComments = (): Comment[] => comments;

const addComment = (comment: Comment): Promise<Comment> => {
    comments.push(comment);
    return Promise.resolve(comment);
}

// const getCommentById = (id: number): Comment | null => {
//     return comments.find((comment) => comment.getCommentId() === id) || null;
// };

export default {
    getAllComments,
    addComment
    // getCommentById,
};
