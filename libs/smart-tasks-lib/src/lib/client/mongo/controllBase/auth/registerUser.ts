
import {UserModel,IUser} from "../../models/user/users";

export const addUser = async (user: IUser) => {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
}