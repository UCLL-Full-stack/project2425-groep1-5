import { Tag } from '../model/tag';

const tags = [
    new Tag({
        tagId: 1,
        title: 'First Post',
        description: '#october',
    }),
    new Tag({
        tagId: 2,
        title: 'Second Post',
        description: '#fortnite',
    }),
];

const getAllTags = (): Tag[] => {
    return tags;
};


export default {
    getAllTags
};