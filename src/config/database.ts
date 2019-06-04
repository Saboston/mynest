interface MysqlConfig{
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        entities: string[];
        synchronize: boolean;
}

export const mysqlConfig:MysqlConfig={
        type: 'mysql',
        host: '188.131.168.95',
        port: 3306,
        username: 'root',
        password: 'golden66',
        database: 'mynest',
        entities: ['src/entity/**/*.entity{.ts,.js}'],
        synchronize: true,
}
    