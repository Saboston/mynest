import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { BannerModule } from './modules/banner/banner.module';
import { GoodsModule } from './modules/goods/goods.module';
import { WxModule } from './modules/wx/wx.module';
import { OrderModule } from './modules/order/order.module';
import { ServiceModule } from './modules/service/service.module';
import { ConfigModule, ConfigService } from 'nestjs-config';
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
    GoodsModule,
    WxModule,
    OrderModule,
    ServiceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
} 
