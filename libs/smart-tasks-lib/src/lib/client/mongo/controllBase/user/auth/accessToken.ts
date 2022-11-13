import { UAccessTokenModel,IUToken } from "../../../models";

export const addUAToken = async(accessData:IUToken)=>{
    const newTokenLog = new UAccessTokenModel(accessData);
    await newTokenLog.save();
    return newTokenLog;
  }