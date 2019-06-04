import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: '188.131.168.95',
        port: 3306,
        username: 'root',
        password: 'golden66',
        database: 'mynest',
        entities: ['src/entity/**/*.entity{.ts,.js}'],
        synchronize: true,
      })],
})

export class DatabaseMysqlModule {}
    