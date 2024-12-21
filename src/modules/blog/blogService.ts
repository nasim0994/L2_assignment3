import { ObjectId } from 'mongoose';
import { IBlog } from './blogInterface';
import { Blog } from './blogModel';
import { User } from '../user/userModel';

export const createBlogService = async (data: IBlog, userID: ObjectId) => {
  const user = await User.findById(userID).select('-password');

  const newData = {
    ...data,
    author: user?._id,
  };

  const blog = await Blog.create(newData);

  return {
    blog,
    author: user,
  };
};
