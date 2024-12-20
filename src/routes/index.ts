import { Router } from 'express';
const router = Router();
import { userRoute } from '../modules/user/userRoute';

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
