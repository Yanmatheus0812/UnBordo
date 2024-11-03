import { Router } from 'express';
import health from './health';

const route = Router({ mergeParams: true });

route.get('/health', health);

export default route;
