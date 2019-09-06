import { resolve } from 'path';
export default {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: Number(process.env.TYPEORM_PORT),
    entities: [
        `${resolve(__dirname, '..')}${process.env.DB_ENTITIES}`,
    ],
    synchronize: true,
};