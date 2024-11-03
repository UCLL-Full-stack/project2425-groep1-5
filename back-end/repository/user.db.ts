import {Profile} from "../model/profile";
import {User} from "../model/user";

const profileRezan = new Profile({
    profileId: 1,
    email: 'rezan@example.com',
    displayName: 'rez',
    theme: 'dark',
    creationDate: new Date('2023-01-01'),
    fontSize: 14,
});

const profileUser2 = new Profile({
    profileId: 2,
    email: 'user2@example.com',
    displayName: 'User Two',
    theme: 'light',
    creationDate: new Date('2023-06-15'),
    fontSize: 16,
});

const users = [
    new User({
        userId: 1,
        password: "password123",
        userName: "rezrez",
        profile: profileRezan
    }),
    new User({
        userId: 2,
        password: "password456",
        userName: "user2",
        profile: profileUser2
    }),
];

const getAllUsers = (): User[] => users;

const getUserById = ({ id }: { id: number }): User | null => {
    return users.find((user) => user.getUserId() === id) || null;
};

export default {
    getAllUsers,
    getUserById,
};