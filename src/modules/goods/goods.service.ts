import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Goods } from '../../mysql_entity/goods.entity';
import { GoodsHomeMenu } from '../../mysql_entity/goodsHomeMenu.entity';
import { RecommendLabels } from '../../mysql_entity/recommendLables.entity';
import { GetGoodsDto, SearchGoodsDto } from './dto/goods.dto';
import { PaginationResult, PaginationOption } from '../../common/pagination';

@Injectable()
export class GoodsService {
    constructor(
        @InjectRepository(Goods)
        private readonly goodsRepository: Repository<Goods>,
        @InjectRepository(GoodsHomeMenu)
        private readonly menuRepository: Repository<GoodsHomeMenu>,
        @InjectRepository(RecommendLabels)
        private readonly RecLabelsRepository: Repository<RecommendLabels>
    ) { }

    //获取商品列表
    async getGoods(query: GetGoodsDto): Promise<PaginationResult<Goods>> {
        let [list, total] = await this.goodsRepository.findAndCount(
            new PaginationOption(query, {
                where: [{ category: query.category }]
            })
        );
        return new PaginationResult<Goods>(query, {
            list,
            total,
        });
    }

    //获取菜单栏
    async goodsHoneMenu(): Promise<GoodsHomeMenu[]> {
        let result = await this.menuRepository.find();
        return result
    }

    //查新商品包括按条件筛选
    async searchGoods(query: SearchGoodsDto): Promise<PaginationResult<Goods>> {
        if (query.name === '') {
            return new PaginationResult<Goods>(query);
        } else {
            let [list, total] = await this.goodsRepository.findAndCount(
                new PaginationOption(query,{
                    where: [{ name: Like(`%${query.name || ''}%`) }]
                })
            );
            return new PaginationResult<Goods>(query, {
                list,
                total,
            });
        }
    }

    //搜索的推荐标签
    async recommendLables(query): Promise<PaginationResult<RecommendLabels>> {
        let [list, total] = await this.RecLabelsRepository.findAndCount(
            new PaginationOption(query)
        );
        return new PaginationResult<RecommendLabels>(query, {
            list,
            total,
        });
    }
}
