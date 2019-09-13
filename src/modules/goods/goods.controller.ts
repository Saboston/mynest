import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { reqJson,reqInterface } from '../../common/req.json';
import { GoodsService } from './goods.service';
import { GetGoodsDto,SearchGoodsDto } from './dto/goods.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('goods')
export class GoodsController {
    constructor(private readonly goodsService: GoodsService) { }

    @ApiOperation({ title: "获取商品列表" })
    @Get('getGoods')
    async getGoods(@Query() query: GetGoodsDto): Promise<reqInterface> {
        let goods = await this.goodsService.getGoods(query);
        return new reqJson(goods, 200, "")
    }

    @ApiOperation({ title: "获取菜单栏" })
    @Get('goodsHomeMenu')
    async goodsHomeMenu(): Promise<reqInterface> {
        let menus = await this.goodsService.goodsHoneMenu();
        return new reqJson(menus, 200, "")
    }

    @ApiOperation({ title: "查询商品" })
    @Get('searchGoods')
    async searchGoods(@Query() query:SearchGoodsDto): Promise<reqInterface> {       
        let search = await this.goodsService.searchGoods(query);
        return new reqJson(search, 200, "")
    }

    @ApiOperation({ title: "搜索推荐标签" })
    @Get('recommendLabels')
    async recommendLabels(@Query() query): Promise<reqInterface> {       
        let search = await this.goodsService.recommendLables(query);
        return new reqJson(search, 200, "")
    }

}
