import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like } from 'typeorm';
import { Goods } from '../../mysql_entity/goods.entity';
import { GoodsHoneMenu } from '../../mysql_entity/goodsHoneMenu.entity';
import { GetGoodsDto,SearchGoodsDto } from './dto/goods.dto';
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
        return new PaginationResult<Goods>(query,{
            list,
            total,
        });
    }

    //获取菜单栏
    async goodsHoneMenu(): Promise<GoodsHoneMenu[]> {
        let result = await this.menuRepository.find();
        return result
    }

    //查新商品包括按条件筛选
    async searchGoods(query:SearchGoodsDto):Promise<PaginationResult<Goods>>{
        if(query.name===''){
            return new PaginationResult<Goods>(query);
        }else{
            let [list, total] = await this.goodsRepository.findAndCount(
                new PaginationOption(query,{
                    where: [{ name: Like(`${query.name || ''}%`) }]
                })
            );
            return new PaginationResult<Goods>(query,{
                list,
                total,
            });
        }
    }
}
