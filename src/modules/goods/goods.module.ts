import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from '../../mysql_entity/goods.entity';
import { GoodsHomeMenu } from '../../mysql_entity/goodsHomeMenu.entity';
import { RecommendLabels } from '../../mysql_entity/recommendLables.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Goods,GoodsHomeMenu,RecommendLabels])],
  controllers: [GoodsController],
  providers: [GoodsService]
})
export class GoodsModule { }
