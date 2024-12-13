import profileDb from "../repository/profile.db";
import { Profile } from '../model/profile';



const getAllProfiles = (): Profile[] => {
    const profiles = profileDb.getAllProfiles();
    if (!profiles || profiles.length === 0) {
        throw new Error("No profiles found");
    }
    return profiles;
}


export default { getAllProfiles };