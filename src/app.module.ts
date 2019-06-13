import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './front/auth/auth.module';
import { BannerModule } from './admin/banner/banner.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '188.131.168.95',
      port: 3306,
      username: 'root',
      password: 'golden66',
      database: 'mynest',
      entities: ['src/mysql_entity/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    BannerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
} 
