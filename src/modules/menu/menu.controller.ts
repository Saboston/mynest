import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { reqJson } from '../../common/req.json';
import { MenuService } from './menu.service';
import { GetMenuDto } from './dto/menu.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) { }

    @ApiOperation({ title: "获取菜单栏" })
    @Get('getMenu')
    async getMenu(@Query() query: GetMenuDto): Promise<object> {
        let menus = await this.menuService.getMenu(query);
        let dataJson = {
            list: menus[0],
            totalCount: menus[1]
        }
        return reqJson(dataJson, 200, "")
    }

}
