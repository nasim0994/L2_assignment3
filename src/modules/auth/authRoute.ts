import express from 'express';
import verifyValidate from '../../middlewares/verifyValidate';
import { loginValidation } from './authValidation';
import { loginUserController } from './authController';
const Router = express.Router();

Router.post('/login', verifyValidate(loginValidation), loginUserController);

export const authRoute = Router;
