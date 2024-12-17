import { Profile as ProfilePrisma } from '@prisma/client';

export class Profile {
    readonly id?: number;
    readonly email : string;
    readonly displayName : string;
    readonly theme: string;
    readonly creationDate: Date;
    readonly fontSize: number;

    constructor(profile: {
        id?: number;
        email: string;
        displayName: string;
        theme : string;
        creationDate: Date;
        fontSize: number;
    }) {
        this.validate(profile)

        this.id = profile.id
        this.email = profile.email
        this.displayName = profile.displayName
        this.theme = profile.theme
        this.creationDate = profile.creationDate;
        this.fontSize = profile.fontSize;
    };

    validate(profile: { profileId?: number; email: string; displayName: string; theme : string; creationDate: Date; fontSize: number; }) {
        if(!profile.email.includes('@')){
            throw new Error("Email must include @")
        }
        if (profile.displayName.length < 3) {
            throw new Error("Displayname must have a minimum of 3 characters.");
        }
        if (!profile.displayName || profile.displayName.length === 0) {
            throw new Error("Displayname is required.");
        }

        const validThemes = ['light', 'dark'];

        if(!validThemes.includes(profile.theme)){
            throw new Error;
        }
        if (profile.fontSize < 10 || profile.fontSize > 30) {
            throw new Error("Font size must be between 10 and 30");
        }
        if (!(profile.creationDate instanceof Date) || isNaN(profile.creationDate.getTime())) {
            throw new Error("Valid creation date is required");
        }
    }

    getId() {
        return this.id;
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

    equals(profile: Profile): boolean {
        return (
            this.id === profile.getId() &&
            this.email === profile.getEmail() &&
            this.displayName === profile.getDisplayName() &&
            this.theme === profile.getTheme() &&
            this.creationDate === profile.getCreationDate() &&
            this.fontSize === profile.getFontSize()
        );
    };

    static from({ id, email, displayName, theme, creationDate, fontSize }: ProfilePrisma ) {
        return new Profile({
            id,
            email,
            displayName,
            theme,
            creationDate,
            fontSize,
        })
    }
}