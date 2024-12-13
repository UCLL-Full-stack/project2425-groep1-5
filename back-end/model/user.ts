import { Profile } from './profile';

export class User {
    readonly userId?: number;
    readonly password : string;
    readonly userName : string;
    readonly profile: Profile;
    // readonly profile?: Profile;

    constructor(user: {userId?: number; password: string; userName: string; profile: Profile;} ) 
    {
        // this.validate(user);
        this.validate(user);
        this.userId = user.userId
        this.password = user.password
        this.userName = user.userName
        this.profile = user.profile

}

    validate(user: {userId?: number; password: string; userName: string; profile: Profile;}){
        if (!user.password || user.password.length < 6) {
            throw new Error ("Password is required and must be at least 6 characters long")
        }
        if (!user.userName || user.userName.length === 0) {
            throw new Error("Username is required");
        }
        if (!(user.profile instanceof Profile)) {
            throw new Error("Valid profile is required");
        }
    }

    getUserId() {
        return this.userId;
    }

    getPassword() {
        return this.password;
    }

    getUsername() {
        return this.userName;
    }

    getProfile() {
        return this.profile;
    }

    equals(user: User):boolean {
        return (
        this.userId === user.getUserId() &&
        this.password === user.getPassword() &&
        this.userName === user.getUsername() &&
        this.profile === user.getProfile() 
    );
}

}