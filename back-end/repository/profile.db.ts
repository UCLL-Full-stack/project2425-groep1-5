import { Profile } from '../model/profile';


const profiles = [
    new Profile({
        profileId: 1,
        email: 'rezan@example.com',
        displayName: 'rez',
        theme: 'dark',
        creationDate: new Date('2023-01-01'),
        fontSize: 14,
    }),
    new Profile({
        profileId: 2,
        email: 'user2@example.com',
        displayName: 'User Two',
        theme: 'light',
        creationDate: new Date('2023-06-15'),
        fontSize: 16,
    }),
];

const createProfile = async (profile: Profile): Promise<Profile> => {

    profiles.push(profile);
    return profile;
};


const getAllProfiles = (): Profile[] => {
    return profiles;
};

export default {getAllProfiles, createProfile}