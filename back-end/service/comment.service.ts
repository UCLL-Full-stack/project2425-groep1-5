import commentDb from "../repository/comment.db";
import { Comment } from '../model/comment';



const getAllComments = (): Comment[] => {
    return commentDb.getAllComments();
}


export default { getAllComments };