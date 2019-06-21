import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './front/auth/auth.module';
import { BannerModule } from './admin/banner/banner.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    BannerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
} 
