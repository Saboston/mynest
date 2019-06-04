import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig } from './config/database'

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlConfig),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
} 
