import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '188.131.168.95',
      port: 3306,
      username: 'root',
      password: 'golden66',
      database: 'mynest',
      entities: ['src/entity/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UtilsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
} 
