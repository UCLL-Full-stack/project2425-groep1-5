import { User } from "../model/user";
import userDb from "../repository/user.db";
import { UserInput } from "../types";

import { Profile } from '../model/profile';
import { ProfileInput } from "../types";





const getAllUsers = (): User[] => {
    return userDb.getAllUsers();
}


const createUser = async ({ userId, password, userName, profile }: UserInput, role: string): Promise<User> => {
    if (role !== 'admin') {
        throw new Error('You are not authorized to add a user');
    }

    if (!password || password.length < 6) {
        throw new Error('Password is required and must be at least 6 characters long');
    }

    if (!userName) {
        throw new Error('Username is required');
    }

    if (!profile) {
        throw new Error('Profile is required');
    }

    
    const validProfile = new Profile({
        profileId: profile.profileId,
        email: profile.email ?? '',
        displayName: profile.displayName ?? '',
        theme: profile.theme ?? 'default',
        creationDate: profile.creationDate ?? new Date(),
        fontSize: profile.fontSize ?? 14,
    });

   
    const user = new User({
        userId,
        password,
        userName,
        profile: validProfile,
    });

    const createdUser = await userDb.createUser(user);

   
    return createdUser;
};

export default { getAllUsers, createUser };

// const createUser = async ({ userId, password, userName, profile }: UserInput, role: string): Promise<User> => {
//     if (role !== 'admin') {
//         throw new Error('You are not authorized to add a user');
//     }

//     if (!password || password.length < 6) {
//         throw new Error('Password is required and must be at least 6 characters long');
//     }

//     if (!userName) {
//         throw new Error('Username is required');
//     }

//     if (!profile) {
//         throw new Error('Profile is required');
//     }

    

//     const user = new User({ userId, password, userName, profile });
//     const createdUser = await userDb.createUser(user);
//     return {
//         userId: createdUser.userId,
//         userName: createdUser.userName,
//         profile: createdUser.profile
//     };
// }




// const createUser = async ({ userId, password, userName, profile }: UserInput, role: string): Promise<User> => {
//     if (role !== 'admin') {
//         throw new Error('You are not authorized to add a user');
//     }

//     if (!password || password.length < 6) {
//         throw new Error('Password is required and must be at least 6 characters long');
//     }

//     if (!userName) {
//         throw new Error('Username is required');
//     }

//     if (!profile) {
//         throw new Error('Profile is required');
//     }

//     // Converteer ProfileInput naar een echte Profile instantie
//     const validProfile = new Profile({
//         profileId: profile.profileId,
//         email: profile.email ?? '',
//         displayName: profile.displayName ?? '',
//         theme: profile.theme ?? 'default',
//         creationDate: profile.creationDate ?? new Date(),
//         fontSize: profile.fontSize ?? 14,
//     });

//     const user = new User({ userId, password, userName, profile: validProfile });
//     const createdUser = await userDb.createUser(user);

//     return {
//         userId: createdUser.userId,
//         userName: createdUser.userName,
//         profile: createdUser.profile,
//     };
// };
