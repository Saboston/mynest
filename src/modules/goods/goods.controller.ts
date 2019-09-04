import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { reqJson,reqInterface } from '../../common/req.json';
import { GoodsService } from './goods.service';
import { GetGoodsDto } from './dto/goods.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('goods')
export class GoodsController {
    constructor(private readonly goodsService: GoodsService) { }

    @ApiOperation({ title: "获取商品列表" })
    @Get('getGoods')
    async getGoods(@Query() query: GetGoodsDto): Promise<reqInterface> {
        let goods = await this.goodsService.getGoods(query);
        return reqJson(goods, 200, "")
    }

    @ApiOperation({ title: "获取菜单栏" })
    @Get('goodsHoneMenu')
    async goodsHoneMenu(): Promise<reqInterface> {
        let menus = await this.goodsService.goodsHoneMenu();
        return reqJson(menus, 200, "")
    }

}
