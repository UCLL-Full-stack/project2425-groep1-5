import profileDb from "../repository/profile.db";
import { Profile } from '../model/profile';
import { ProfileInput } from "../types";

const createProfile =  ({ profileId, email, displayName, theme, creationDate, fontSize}: ProfileInput, role: string): Promise<Profile> => {
    if (role !== 'admin') {
        throw new Error('You are not authorized to create a profile');
    }

    if (!email) {
        throw new Error('Email is required');
    }

    const profile = new Profile({ profileId, email, displayName, theme, creationDate, fontSize });
    return profileDb.createProfile(profile);
};

// const createProfile = ({firstname,lastname,email,dateOfBirth}: ProfileInput): Promise<Profile> => {
//     const profile = new Profile({firstname,lastname,email,dateOfBirth});
//     return profileDb.createProfile(profile);
// };

const getAllProfiles = (): Profile[] => {
    const profiles = profileDb.getAllProfiles();
    if (!profiles || profiles.length === 0) {
        throw new Error("No profiles found");
    }
    return profiles;
};

export default { getAllProfiles, createProfile };