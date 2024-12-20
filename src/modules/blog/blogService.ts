import { ObjectId } from 'mongoose';
import { IBlog } from './blogInterface';
import { Blog } from './blogModel';
import { User } from '../user/userModel';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import QueryBuilder from '../../builders/QueryBuilder';

export const createBlogService = async (data: IBlog, userID: ObjectId) => {
  const user = await User.findById(userID).select('-password');

  // blog create only user
  if (user?.role !== 'user')
    throw new AppError(httpStatus.FORBIDDEN, 'Only user can create blog');

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

export const updateBlogService = async (
  data: Partial<IBlog>,
  userID: ObjectId,
  blogID: string,
) => {
  const user = await User.findById(userID).select('-password');

  const blog = await Blog.findById(blogID);
  if (!blog)
    throw new AppError(httpStatus.NOT_FOUND, 'This Blog is not found !');

  if (blog.author.toString() !== userID.toString())
    throw new AppError(
      httpStatus.FORBIDDEN,
      'You are not authorized to update this blog',
    );

  const updatedBlog = await Blog.findByIdAndUpdate(blogID, data, { new: true });

  if (!updatedBlog)
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to update blog',
    );

  return {
    blog: updatedBlog,
    author: user,
  };
};

export const deleteBlogService = async (userID: ObjectId, blogID: string) => {
  const blog = await Blog.findById(blogID);
  if (!blog)
    throw new AppError(httpStatus.NOT_FOUND, 'This Blog is not found !');

  if (blog.author.toString() !== userID.toString())
    throw new AppError(
      httpStatus.FORBIDDEN,
      'You are not authorized to update this blog',
    );

  const result = await Blog.findByIdAndDelete(blogID);

  if (!result)
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to delete blog',
    );

  return result;
};

export const getAllBlogsService = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(
    Blog.find().populate('author', '-password'),
    query,
  )
    .search(['title', 'content'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await blogQuery.modelQuery;
  return result;
};
