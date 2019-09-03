import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from '../../mysql_entity/menu.entity';
import { GetMenuDto } from './dto/menu.dto';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private readonly menuRepository: Repository<Menu>,
    ) { }

    //获取菜单栏
    async getMenu(query: GetMenuDto): Promise<[Menu[], number]> {
        let data = await this.menuRepository.findAndCount({
            where: [
                { type: query.type }
            ],
            skip: ((query.page - 1) || 0) * query.size,
            take: query.size
        });
        return data;
    }
}
