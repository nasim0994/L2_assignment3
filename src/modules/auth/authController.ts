import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { loginUserService } from './authService';
import httpStatus from 'http-status';

export const loginUserController: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await loginUserService(req.body);
    const { user, accessToken } = result;

    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User is logged in succesfully!',
      data: {
        token: accessToken,
        user,
      },
    });
  },
);
