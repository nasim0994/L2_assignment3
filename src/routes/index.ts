import { Router } from 'express';
const router = Router();
import { userRoute } from '../modules/user/userRoute';
import { authRoute } from '../modules/auth/authRoute';

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
