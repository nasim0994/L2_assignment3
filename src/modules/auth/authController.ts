import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { createUserService, loginUserService } from './authService';
import httpStatus from 'http-status';
import { IUser } from '../user/userInterface';

export const createUserController: RequestHandler = catchAsync(
  async (req, res) => {
    const data: IUser = req.body;
    const result = await createUserService(data);

    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  },
);

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
