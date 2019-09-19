import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from '../../mysql_entity/goods.entity';
import { GoodsCategoryFirst } from '../../mysql_entity/goodsCategoryFirst.entity';
import { RecommendLabels } from '../../mysql_entity/recommendLables.entity';
import { GoodsCategorySecond } from '../../mysql_entity/goodsCategorySecond.entity'
import { GoodsCategoryLabels } from '../../mysql_entity/goodsCategoryLabels.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Goods,GoodsCategoryFirst,RecommendLabels,GoodsCategorySecond,GoodsCategoryLabels])],
  controllers: [GoodsController],
  providers: [GoodsService]
})
export class GoodsModule { }
