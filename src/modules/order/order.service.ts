import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../mysql_entity/order.entity';
import { GetOrdersDto } from './dto/order.dto';
import { PaginationResult, PaginationOption } from '../../common/pagination';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
    ) { }

    //获取商品列表
    async getOrders(query: GetOrdersDto): Promise<PaginationResult<Order>> {
        let [list, total] = await this.orderRepository.findAndCount(
            new PaginationOption(query,{
                where: [{ type: query.type }]
            })
        );
        return new PaginationResult<Order>(query,{
            list,
            total,
        });
    }

}
