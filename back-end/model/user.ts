
export class User {
    readonly userId?: number;
    readonly password : string;
    readonly userName : string;


    constructor(user: {
        userId?: number;
        password: string;
        userName: string;

    } ) {
        // this.validate(user);
    
        this.userId = user.userId
        this.password = user.password
        this.userName = user.userName

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

}