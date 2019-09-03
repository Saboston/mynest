import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { reqJson } from '../../common/req.json';
import { GoodsService } from './goods.service';
import { GetGoodsDto } from './dto/goods.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('goods')
export class GoodsController {
    constructor(private readonly goodsService: GoodsService) { }

    @ApiOperation({ title: "获取商品列表" })
    @Get('getGoods')
    async getGoods(@Query() query: GetGoodsDto): Promise<object> {
        let goods = await this.goodsService.getGoods(query);
        let dataJson = {
            list: goods[0],
            totalCount: goods[1]
        }
        return reqJson(200, dataJson, "")
    }

}
