import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from '../../mysql_entity/goods.entity';
import { GoodsHoneMenu } from '../../mysql_entity/goodsHoneMenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Goods,GoodsHoneMenu])],
  controllers: [GoodsController],
  providers: [GoodsService]
})
export class GoodsModule { }
