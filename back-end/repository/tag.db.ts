import { Tag } from '../model/tag';

const tags = [
    new Tag({
        id: 1,
        title: 'First Post',
        description: '#october',
    }),
    new Tag({
        id: 2,
        title: 'Second Post',
        description: '#fortnite',
    }),
];

const getAllTags = (): Tag[] => {
    return tags;
};

const addTag = async (tag: Tag): Promise<Tag> => {
    tags.push(tag);
    return tag;
}


export default {
    getAllTags,
    addTag
};