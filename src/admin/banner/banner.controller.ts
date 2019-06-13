import { Controller,Get,Query } from '@nestjs/common';
import { GetBannerDto } from './dto/banner.dto';
import { reqJson } from '../../common/req.json'
import { BannerService } from './banner.service';

@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService) {}

    @Get('getBanner')
    async getBanner(@Query() query:GetBannerDto):Promise<object>{
        let banners=await this.bannerService.getBanner(query);
        return reqJson(200,banners,"")
    }
}
