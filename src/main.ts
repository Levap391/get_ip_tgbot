import { NestFactory } from '@nestjs/core';
import { Application } from './Application';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.APP_PORT;

async function bootstrap() {
  const app = await NestFactory.create(Application);
  await app.listen(port);
  console.log(`(￣▽￣)ノ\nAPI -> http://localhost:${port}/`);
};
bootstrap();
