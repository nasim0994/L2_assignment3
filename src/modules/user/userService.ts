import { IUser } from './userInterface';
import { User } from './userModel';

export const createUserService = async (data: IUser) => {
  const result = await User.create(data);
  return result;
};
