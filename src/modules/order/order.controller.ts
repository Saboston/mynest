import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { reqJson,reqInterface } from '../../common/req.json';
import { OrderService } from './order.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { GetOrdersDto } from './dto/order.dto'

@ApiBearerAuth()
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @ApiOperation({ title: "获取订单列表" })
    @Get('getOrders')
    async getGoods(@Query() query: GetOrdersDto): Promise<reqInterface> {
        let orders = await this.orderService.getOrders(query);
        return new reqJson(orders, 200, "")
    }

}
