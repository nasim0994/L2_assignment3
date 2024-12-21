import express from 'express';
import { getAllUserController } from './userController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
const Router = express.Router();

Router.get('/all', verifyAdmin, getAllUserController);

export const userRoute = Router;
