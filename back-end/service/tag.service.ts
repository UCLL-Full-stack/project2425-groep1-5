import tagDb from "../repository/tag.db";
import { Tag } from '../model/tag';



const getAllTags = (): Tag[] => {
    return tagDb.getAllTags();
}


export default { getAllTags };