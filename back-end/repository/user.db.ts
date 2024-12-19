import {Profile} from "../model/profile";
import {User} from "../model/user";

const profileRezan = new Profile({
    id: 1,
    email: 'rezan@example.com',
    displayName: 'rez',
    theme: 'dark',
    creationDate: new Date('2023-01-01'),
    fontSize: 14,
});

const profileUser2 = new Profile({
    id: 2,
    email: 'user2@example.com',
    displayName: 'User Two',
    theme: 'light',
    creationDate: new Date('2023-06-15'),
    fontSize: 16,
});

const users = [
    new User({
        id: 1,
        password: "password123",
        username: "rezrez",
        profile: profileRezan,
        posts: []
    }),
    new User({
        id: 2,
        password: "password456",
        username: "user2",
        profile: profileUser2,
        posts: []
    }),
];

const getAllUsers = (): User[] => users;

const createUser = async (user: User): Promise<User> => {
    users.push(user);
    return user;
}

const getUserById = ({ id }: { id: number }): User | null => {
    return users.find((user) => user.getId() === id) || null;
};

export default {
    getAllUsers,
    getUserById,
    createUser,
};