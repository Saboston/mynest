import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Goods } from '../../mysql_entity/goods.entity';
import { GoodsCategoryFirst } from '../../mysql_entity/goodsCategoryFirst.entity';
import { GoodsCategorySecond } from '../../mysql_entity/goodsCategorySecond.entity';
import { GoodsCategoryLabels } from '../../mysql_entity/goodsCategoryLabels.entity';
import { RecommendLabels } from '../../mysql_entity/recommendLables.entity';
import { GetGoodsDto, SearchGoodsDto } from './dto/goods.dto';
import { PaginationResult, PaginationOption } from '../../common/pagination';

@Injectable()
export class GoodsService {
    constructor(
        @InjectRepository(Goods)
        private readonly goodsRepository: Repository<Goods>,
        @InjectRepository(GoodsCategoryFirst)
        private readonly goodsCategoryFirst: Repository<GoodsCategoryFirst>,
        @InjectRepository(GoodsCategorySecond)
        private readonly goodsCategorySecond: Repository<GoodsCategorySecond>,
        @InjectRepository(GoodsCategoryLabels)
        private readonly goodsCategoryLabels: Repository<GoodsCategoryLabels>,
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

    //获取分类页菜单栏
    async getGoodsCategoryFirst(): Promise<GoodsCategoryFirst[]> {
        let result = await this.goodsCategoryFirst.find();
        return result
    }
    
    //获取分类页菜单栏右侧标签分类
    async getGoodsCategoryLabels(id: number): Promise<GoodsCategoryLabels[]> {
        let result = await this.goodsCategoryLabels.find({where:{parentId:id}});
        return result
    }

    //获取分类页菜单栏右侧 某个标签分类的商品
    async goodsCategoryLabelsGoods(id: number): Promise<GoodsCategorySecond[]> {  
        let result = await this.goodsCategorySecond.find({where:{label:id}});
        return result
    }

    //查新商品包括按条件筛选
    async searchGoods(query: SearchGoodsDto): Promise<PaginationResult<Goods>> {
        if (query.name === '') {
            return new PaginationResult<Goods>(query);
        } else {
            let [list, total] = await this.goodsRepository.findAndCount(
                new PaginationOption(query, {
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
