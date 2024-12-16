import commentDb from "../repository/comment.db";
import { Comment } from '../model/comment';



const addComment = (commentInput: {commentId?: number; text: string; }, role: string): Promise<Comment> => {
    if (role !== 'admin' && role !== 'user') {
        throw new Error("You are not authorized to add a comment");
    }

    const comment = new Comment(commentInput);
    return commentDb.addComment(comment);
}

const getAllComments = (): Comment[] => {
    return commentDb.getAllComments();
}


export default { addComment ,getAllComments };