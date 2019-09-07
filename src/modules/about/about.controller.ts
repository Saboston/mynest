import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { reqJson,reqInterface } from '../../common/req.json';
import { AboutService } from './about.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('about')
export class AboutController {
    constructor(private readonly aboutService: AboutService) { }

    @ApiOperation({ title: "关于我们介绍" })
    @Get('getAboutUs')
    async getAboutUs(): Promise<reqInterface> {
        let about = await this.aboutService.getAboutUs();
        return new reqJson(about, 200, "")
    }
}
