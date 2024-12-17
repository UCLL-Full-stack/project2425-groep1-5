import { Profile } from './profile';
import { Post } from './post';
import { User as UserPrisma } from '@prisma/client';
import { Profile as ProfilePrisma } from '@prisma/client';
import { Post as PostPrisma } from '@prisma/client';
import { Comment as CommentPrisma } from "@prisma/client";
import { Tag as TagPrisma } from "@prisma/client";

export class User {
    private id?: number;
    private password: string;
    private username: string;
    private profile: Profile;
    private posts: Post[];

    constructor(user: {
        id: number;
        password: string;
        username: string;
        profile: Profile;
        posts: Post[];
    }) {
        this.validate(user);

        this.id = user.id;
        this.password = user.password;
        this.username = user.username;
        this.profile = user.profile;
        this.posts = user.posts;
    };

    validate(user: { id: number; password: string; username: string; profile: Profile }) {
        if (!user.password || user.password.length < 6) {
            throw new Error ("Password is required and must be at least 6 characters long")
        }

        if (!user.username || user.username.length === 0) {
            throw new Error("Username is required");
        }

        if (!(user.profile instanceof Profile)) {
            throw new Error("Valid profile is required");
        }
    }

    getId() {
        return this.id;
    }

    getPassword() {
        return this.password;
    }

    getUsername() {
        return this.username;
    }

    getProfile() {
        return this.profile;
    }

    getPosts() {
        return this.posts;
    }

    equals(user: User): boolean {
        return (
            this.id === user.getId() &&
            this.password === user.getPassword() &&
            this.username === user.getUsername() &&
            this.profile === user.getProfile() &&
            this.posts === user.getPosts()
        );
    }

    static from({
                    id,
                    password,
                    username,
                    profile,
                    posts
    }: UserPrisma & {
        profile: ProfilePrisma,
        posts: (PostPrisma & { comments: CommentPrisma[], tags: TagPrisma[]})[]
    }) {
        return new User({
            id,
            password,
            username,
            profile: Profile.from(profile),
            posts: posts.map((post) => Post.from(post)),
        });
    };
}