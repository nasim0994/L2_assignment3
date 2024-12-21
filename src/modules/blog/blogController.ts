import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { IBlog } from './blogInterface';
import { createBlogService } from './blogService';
import { ObjectId } from 'mongoose';

export const createBlogController: RequestHandler = catchAsync(
  async (req, res) => {
    const data: IBlog = req.body;
    const userID: ObjectId = req.user._id;

    const { blog, author } = await createBlogService(data, userID);

    res.status(200).json({
      success: true,
      message: 'Blog created successfully',
      data: {
        ...blog.toObject(),
        author,
      },
    });
  },
);
