import { IUser } from './userInterface';
import { UserModel } from './userModel';

export const createUserService = async (data: IUser) => {
  const result = await UserModel.create(data);
  return result;
};
