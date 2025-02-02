import { Router } from 'express';
import changePasswordRoute from './change-password-route';
import confirmCodeRoute from './confirm-code-route';
import requestCodeRoute from './request-code-route';

const route = Router({ mergeParams: true });

route.post('/request-code', requestCodeRoute);
route.post('/confirm-code', confirmCodeRoute);
route.post('/change-password', changePasswordRoute);

export default route;
