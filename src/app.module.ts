import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './front/auth/auth.module';
import { BannerModule } from './front/banner/banner.module';
import { ConfigModule,ConfigService } from 'nestjs-config';
import { WxModule } from './front/wx/wx.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => config.get('database.config'),
      inject: [ConfigService],
    }),
    AuthModule,
    BannerModule,
    WxModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
} 
