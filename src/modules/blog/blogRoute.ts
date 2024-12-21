import express from 'express';
import { verifyToken } from '../../middlewares/verifyToken';
import { createBlogController } from './blogController';
const Router = express.Router();

Router.post('/', verifyToken, createBlogController);

export const blogRoute = Router;
