/* eslint-disable perfectionist/sort-imports */
import 'express-async-errors';
import setupSwagger from '@/infra/docs/swagger';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error-handler';
import route from './routes';

const api = express();

api.use(cors({ origin: '*', credentials: true }));
api.use(helmet());
api.use(express.json({ limit: '10mb' }));
api.use(express.urlencoded({ extended: true, limit: '10mb' }));

api.use(route);

setupSwagger(api);

api.use(errorHandler);

export { api };
