import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Goods } from '../../mysql_entity/goods.entity';
import { GetGoodsDto } from './dto/goods.dto';

@Injectable()
export class GoodsService {
    constructor(
        @InjectRepository(Goods)
        private readonly goodsRepository: Repository<Goods>,
    ) { }

    //获取商品列表
    async getGoods(query: GetGoodsDto): Promise<[Goods[], number]> {
        let data = await this.goodsRepository.findAndCount({
            where: [
                { type: query.category }
            ],
            skip: ((query.page - 1) || 0) * query.size,
            take: query.size
        });
        return data;
    }
}
