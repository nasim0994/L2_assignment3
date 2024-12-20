import express from 'express';
import verifyValidate from '../../middlewares/verifyValidate';
import { userValidation } from './userValidation';
import { createUserController } from './userController';
const Router = express.Router();

Router.post('/register', verifyValidate(userValidation), createUserController);

export const userRoute = Router;
