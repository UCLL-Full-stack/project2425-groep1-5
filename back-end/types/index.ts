type Role = 'admin' | 'guest' | 'user';

type PostInput = {
    postId?: number;
    title?: string;
    pathToFile?: string;
    favorites?: number;
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
}



export {
    PostInput,
    ProfileInput,
    TagInput,
    UserInput,
    Role,
};