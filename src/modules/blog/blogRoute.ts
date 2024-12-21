import express from 'express';
import { verifyToken } from '../../middlewares/verifyToken';
import {
  createBlogController,
  deleteBlogController,
  updateBlogController,
} from './blogController';
const Router = express.Router();

Router.post('/', verifyToken, createBlogController);
Router.patch('/:id', verifyToken, updateBlogController);
Router.delete('/:id', verifyToken, deleteBlogController);

export const blogRoute = Router;
