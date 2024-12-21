import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { IBlog } from './blogInterface';
import {
  createBlogService,
  deleteBlogService,
  getAllBlogsService,
  updateBlogService,
} from './blogService';
import { ObjectId } from 'mongoose';
import httpStatus from 'http-status';

export const createBlogController: RequestHandler = catchAsync(
  async (req, res) => {
    const data: IBlog = req.body;
    const userID: ObjectId = req.user._id;

    const { blog, author } = await createBlogService(data, userID);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Blog created successfully',
      data: {
        ...blog.toObject(),
        author,
      },
    });
  },
);

export const updateBlogController: RequestHandler = catchAsync(
  async (req, res) => {
    const data: IBlog = req.body;
    const userID: ObjectId = req.user._id;
    const blogID: string = req.params.id;

    const { blog, author } = await updateBlogService(data, userID, blogID);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Blog update successfully',
      data: {
        ...blog.toObject(),
        author,
      },
    });
  },
);

export const deleteBlogController: RequestHandler = catchAsync(
  async (req, res) => {
    const userID: ObjectId = req.user._id;
    const blogID: string = req.params.id;

    await deleteBlogService(userID, blogID);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Blog delete successfully',
    });
  },
);

export const getAllBlogsController: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await getAllBlogsService(req.query);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Blogs fetched successfully',
      data: result,
    });
  },
);
