import { UserModel } from "../../models";

export const getUserById = async (userId: string) => {
    const authUser = await UserModel.findOne({
        _id: userId,
      }).select('-password');

      return authUser
}

export const getUsersBusinessById = async (businessId: string) => {
    const authBusiness = await UserModel.find({
         businessId
      }).select('-password');

      return authBusiness
}