import { BusinessModel } from '../../models';
import { BAccessTokenModel, IBToken } from '../../models';

export const getBusinessById = async (businessId: string) => {
  const authBusiness = await BusinessModel.findOne({
    _id: businessId,
  }).select('-password');

  return authBusiness;
};

export const addBAToken = async (accessData: IBToken) => {
  const newTokenLog = new BAccessTokenModel(accessData);
  await newTokenLog.save();
  return newTokenLog;
};
