import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { BannerModule } from './modules/banner/banner.module';
import { MenuModule } from './modules/menu/menu.module';
import { GoodsModule } from './modules/goods/goods.module';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { WxModule } from './modules/wx/wx.module';
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
    MenuModule,
    GoodsModule,
    WxModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
} 
