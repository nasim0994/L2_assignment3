import { RequestHandler } from 'express';
import { createUserService } from './userService';
import { IUser } from './userInterface';
import { catchAsync } from '../../utils/catchAsync';

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
