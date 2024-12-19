import { ObjectId } from 'mongoose';

export type IBlog = {
  title: string;
  content: string;
  author: ObjectId;
  isPublished: boolean;
};
