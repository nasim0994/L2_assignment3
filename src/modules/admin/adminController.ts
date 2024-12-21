import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { deleteBlogService, updateUserStatusService } from './adminService';
import httpStatus from 'http-status';

export const deleteBlogController: RequestHandler = catchAsync(
  async (req, res) => {
    const blogID: string = req.params.id;

    await deleteBlogService(blogID);

    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Blog delete successfully',
    });
  },
);

export const updateUserStatusController: RequestHandler = catchAsync(
  async (req, res) => {
    const userId: string = req.params.id;

    await updateUserStatusService(userId);

    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User blocked successfully',
    });
  },
);
