import { BusinessModel, IBusiness } from '../../models';

export const addBusiness = async (business: IBusiness) => {
  const newBusiness = new BusinessModel(business);
  await newBusiness.save();
  return newBusiness;
};
