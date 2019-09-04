import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Goods } from '../../mysql_entity/goods.entity';
import { GoodsHoneMenu } from '../../mysql_entity/goodsHoneMenu.entity';
import { GetGoodsDto } from './dto/goods.dto';
import { PaginationResult, PaginationOption } from '../../common/pagination';

@Injectable()
export class GoodsService {
    constructor(
        @InjectRepository(Goods)
        private readonly goodsRepository: Repository<Goods>,
        @InjectRepository(GoodsHoneMenu)
        private readonly menuRepository: Repository<GoodsHoneMenu>
    ) { }

    //获取商品列表
    async getGoods(query: GetGoodsDto): Promise<PaginationResult<Goods>> {
        let [list, total] = await this.goodsRepository.findAndCount(
            new PaginationOption(query,{
                where: [{ category: query.category }]
            })
        );
        return new PaginationResult<Goods>({
            list,
            total,
        });
    }

    //获取菜单栏
    async goodsHoneMenu(): Promise<GoodsHoneMenu[]> {
        let result = await this.menuRepository.find();
        return result
    }
}
