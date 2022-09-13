import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    syncronize: process.env.DB_SYNCHRONIZE,
}));
