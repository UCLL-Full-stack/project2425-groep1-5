import postDb from "../repository/post.db";
import { Post } from '../model/post';



const getAllPosts = (): Post[] => {
    return postDb.getAllPosts();
}


export default { getAllPosts };