import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { reqJson,reqInterface } from '../../common/req.json';
import { ServiceService } from './service.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('service')
export class ServiceController {
    constructor(private readonly serviceService: ServiceService) { }

    @ApiOperation({ title: "发送消息" })
    @Get('sendMessage')
    async sendMessage(): Promise<reqInterface> {
        let about = await this.serviceService.sendMessage();
        return new reqJson(about, 200, "")
    }
}
