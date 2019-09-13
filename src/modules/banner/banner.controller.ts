import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { GetBannerDto, SaveBannerDto } from './dto/banner.dto';
import { reqJson,reqInterface } from '../../common/req.json';
import { BannerService } from './banner.service';
import { ApiOperation } from '@nestjs/swagger';
import * as qiniu from 'qiniu';

@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService) { }

    @ApiOperation({ title: "获取图片" })
    @Get('getBanner')
    async getBanner(@Query() query: GetBannerDto): Promise<reqInterface> {
        let banners = await this.bannerService.getBanner(query);
        return new reqJson(banners, 200, "")
    }

    @ApiOperation({ title: "获取图片类型" })
    @Get('getBannerTypes')
    async getBannerTypes(@Query() query): Promise<reqInterface> {
        let bannersTypes = await this.bannerService.getBannerTypes(query);
        let dataJson = {
            list: bannersTypes[0],
            totalCount: bannersTypes[1]
        }
        return new reqJson(dataJson, 200, "")
    }

    @ApiOperation({ title: "保存图片信息" })
    @Post('saveBanner')
    async saveBanner(@Body() body: SaveBannerDto): Promise<reqInterface> {
        let resultBanner = await this.bannerService.saveBannerData(body);
        return new reqJson(resultBanner, 200, "上传成功！")
    }

    @ApiOperation({ title: "获取七牛云上传Token" })
    @Get('getUploadToken')
    getUploadToken(): reqInterface {
        const accessKey = process.env.QINIU_ACCESSKEY;
        const secretKey = process.env.QINIU_SECRETKEY;
        const bucket = 'media';
        let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
        let options = {
            scope: bucket,
            expires: 3600 * 24
        };
        let putPolicy = new qiniu.rs.PutPolicy(options);
        let pathUrl: string = putPolicy.uploadToken(mac);
        return new reqJson(pathUrl, 200, "")
    }

}
