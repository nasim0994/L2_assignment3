import express from 'express';
import { verifyToken } from '../../middlewares/verifyToken';
import {
  createBlogController,
  deleteBlogController,
  getAllBlogsController,
  updateBlogController,
} from './blogController';
const Router = express.Router();

Router.get('/', getAllBlogsController);
Router.post('/', verifyToken, createBlogController);
Router.patch('/:id', verifyToken, updateBlogController);
Router.delete('/:id', verifyToken, deleteBlogController);

export const blogRoute = Router;
