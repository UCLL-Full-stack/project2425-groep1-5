export class Profile {
    readonly profileId?: number;
    readonly email : string;
    readonly displayName : string;
    readonly theme: string;
    readonly creationDate: Date;
    readonly fontSize: number;


    constructor(profile: {
        profileId?: number;
        email: string;
        displayName: string;
        theme : string;
        creationDate: Date;
        fontSize: number;

    } ) {

        this.profileId = profile.profileId
        this.email = profile.email
        this.displayName = profile.displayName
        this.theme = profile.theme
        this.creationDate = profile.creationDate;
        this.fontSize = profile.fontSize;


}

    getProfileId() {
        return this.profileId;
    }

    getEmail() {
        return this.email;
    }

    getDisplayName() {
        return this.displayName;
    }

    getTheme() {
        return this.theme;
    }

    getCreationDate () {
        return this.creationDate;
    }

    getFontSize() {
        return this.fontSize
    }

}