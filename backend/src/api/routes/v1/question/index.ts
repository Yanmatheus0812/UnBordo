import { authMiddleware } from '@/api/middlewares';
import { Router } from 'express';
import createRoute from './create-route';
import getAllRoute from './get-all-route';
import getByIdRoute from './get-by-id-route';
import replyRoute from './reply-route';

const route = Router({ mergeParams: true });

route.post('/create', authMiddleware, createRoute);
route.post('/reply/:id', authMiddleware, replyRoute);
route.get('/:id', authMiddleware, getByIdRoute);
route.get('', authMiddleware, getAllRoute);

export default route;
