import http from 'node:http';
import { api } from './api';
import { env } from './env';
import logger from './infra/logger/pino';
import { prisma } from './infra/orm/prisma/datasource';

export function apiProvider() {
  http.createServer(api).listen(env.PORT, () => {
    logger.info(`Server is running on port ${env.PORT}`);
  });
}

export function databaseProvider() {
  logger.info('Connecting with database');

  prisma.$connect();

  logger.info('Database connected');

  prisma.$disconnect();
}

export async function server() {
  logger.info('Setting up server...');

  databaseProvider();
  apiProvider();

  logger.info('Server is up!');
}

server().catch(console.error);
