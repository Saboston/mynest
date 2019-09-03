import { Module } from '@nestjs/common';
import { BannerController } from './banner.controller';
import { BannerService } from './banner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banner } from '../../mysql_entity/banner.entity';
import { BannerTypes } from '../../mysql_entity/bannerTypes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Banner,BannerTypes])],
  controllers: [BannerController],
  providers: [BannerService]
})
export class BannerModule {

}
