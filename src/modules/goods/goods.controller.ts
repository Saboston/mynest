import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { reqJson, reqInterface } from '../../common/req.json';
import { GoodsService } from './goods.service';
import { GetGoodsDto, SearchGoodsDto } from './dto/goods.dto';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('goods')
@Controller('goods')
export class GoodsController {
    constructor(private readonly goodsService: GoodsService) { }

    @ApiOperation({ title: "获取商品列表" })
    @Get('getGoods')
    async getGoods(@Query() query: GetGoodsDto): Promise<reqInterface> {
        let goods = await this.goodsService.getGoods(query);
        return new reqJson(goods)
    }

    @ApiOperation({ title: "获取分类页菜单栏" })
    @Get('getGoodsCategoryFirst')
    async getGoodsCategoryFirst(): Promise<reqInterface> {
        let menus = await this.goodsService.getGoodsCategoryFirst();
        return new reqJson(menus)
    }

    @ApiOperation({ title: "获取分类页菜单栏右侧详细分类" })
    @Get('goodsCategoryDetail')
    async goodsCategoryDetail(@Query('id') id: number): Promise<reqInterface> {
        let labelArray = await this.goodsService.getGoodsCategoryLabels(id);
        for await (let i of labelArray){
            i['list'] = await this.goodsService.goodsCategoryLabelsGoods(i.id);
        }  
        return new reqJson(labelArray)
    }

    @ApiOperation({ title: "查询商品" })
    @Get('searchGoods')
    async searchGoods(@Query() query: SearchGoodsDto): Promise<reqInterface> {
        let search = await this.goodsService.searchGoods(query);
        return new reqJson(search)
    }

    @ApiOperation({ title: "搜索推荐标签" })
    @Get('recommendLabels')
    async recommendLabels(@Query() query): Promise<reqInterface> {
        let search = await this.goodsService.recommendLables(query);
        return new reqJson(search)
    }

}
