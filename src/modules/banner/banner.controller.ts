import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { GetBannerDto, SaveBannerDto } from './dto/banner.dto';
import { reqJson } from '../../common/req.json';
import { BannerService } from './banner.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import * as qiniu from 'qiniu';

@ApiBearerAuth()
@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService) { }

    @ApiOperation({ title: "获取图片" })
    @Get('getBanner')
    async getBanner(@Query() query: GetBannerDto): Promise<object> {
        let banners = await this.bannerService.getBanner(query);
        let dataJson = {
            list: banners[0],
            totalCount: banners[1]
        }
        return reqJson(dataJson, 200, "")
    }

    @ApiOperation({ title: "获取图片类型" })
    @Get('getBannerTypes')
    async getBannerTypes(@Query() query): Promise<object> {
        let bannersTypes = await this.bannerService.getBannerTypes(query);
        let dataJson = {
            list: bannersTypes[0],
            totalCount: bannersTypes[1]
        }
        return reqJson(dataJson, 200, "")
    }

    @ApiOperation({ title: "保存图片信息" })
    @Post('saveBanner')
    async saveBanner(@Body() body: SaveBannerDto): Promise<object> {
        let resultBanner = await this.bannerService.saveBannerData(body);
        return reqJson(resultBanner, 200, "上传成功！")
    }

    @ApiOperation({ title: "获取七牛云上传Token" })
    @Get('getUploadToken')
    getUploadToken(): object {
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
        return reqJson(pathUrl, 200, "")
    }

}
