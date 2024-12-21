import express from 'express';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import {
  deleteBlogController,
  updateUserStatusController,
} from './adminController';

const Router = express.Router();

Router.delete('/blogs/:id', verifyAdmin, deleteBlogController);
Router.patch('/users/:id/block', verifyAdmin, updateUserStatusController);

export const adminRoute = Router;
