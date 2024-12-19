type Role = 'admin' | 'superAdmin' | 'user';

type PostInput = {
    id?: number;
    title?: string;
    pathToFile?: string;
    favorites?: number;
    userId?: number;
    comments?: CommentInput[];
    tags?: TagInput[];
};

type ProfileInput = {
    id?: number;
    email?: string;
    displayName: string;
    theme: string;
    creationDate: Date;
    fontSize: number;
}

type TagInput = {
    id: number;
    title: string;
    description: string;
}

type UserInput = {
    id?: number;
    password?: string;
    userName?: string;
    profile?: ProfileInput;
    posts?: PostInput;
}

type CommentInput = {
    id?: number;
    text: string;
    postId?: number;
}

export {
    PostInput,
    ProfileInput,
    TagInput,
    UserInput,
    Role,
};