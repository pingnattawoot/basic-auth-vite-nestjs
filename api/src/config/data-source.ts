import 'dotenv/config';
import { join } from 'path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [join(__dirname, '../../database/entities/**/*{.ts,.js}')],
  migrations: [join(__dirname, '../../database/migrations/*.ts')],
  subscribers: [],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
});
