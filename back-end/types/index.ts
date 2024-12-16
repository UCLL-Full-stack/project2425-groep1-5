type Role = 'admin' | 'guest' | 'user';

type PostInput = {
    postId?: number;
    title?: string;
    pathToFile?: string;
    favorites?: number;
};


type ProfileInput = {
    profileId?: number;
    email?: string;
    displayName: string;
    theme: string;
    creationDate: Date;
    fontSize: number;
}

type TagInput = {
    tagId: number;
    title: string;
    description: string;
}

type UserInput = {
    userId?: number;
    password?: string;
    userName?: string;
    profile?: ProfileInput;
}



export {
    PostInput,
    ProfileInput,
    TagInput,
    UserInput,
    Role,
};