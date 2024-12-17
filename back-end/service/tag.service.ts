import tagDb from "../repository/tag.db";
import { Tag } from '../model/tag';
import { TagInput } from "../types";

const getAllTags = (): Tag[] => {
    return tagDb.getAllTags();
};

const addTag = async ({ tagId, title, description }: TagInput, role: string): Promise<Tag> => {
    if (role !== 'admin') {
        throw new Error('You are not authorized to add a tag');
    }

    if (!title) {
        throw new Error('Title is required');
    }

    const tag = new Tag({ tagId, title, description });
    return tagDb.addTag(tag);
};

export default { getAllTags, addTag };