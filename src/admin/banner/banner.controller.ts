import { Controller,Get,Query, Post } from '@nestjs/common';
import { GetBannerDto } from './dto/banner.dto';
import { reqJson } from '../../common/req.json'
import { BannerService } from './banner.service';
import * as qiniu from 'qiniu';

@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService) {}

    //获取图片
    @Get('getBanner')
    async getBanner(@Query() query:GetBannerDto):Promise<object>{
        let banners=await this.bannerService.getBanner(query);
        let dataJson={
            list:banners[0],
            totalCount:banners[1]
        }
        return reqJson(200,dataJson,"")
    }

    //获取七牛云上传Token
    @Get('getUploadToken')
    getUploadToken():object{
        const accessKey = 'KWw9FSH5Q-HsUCk5eIn2VDxIcvKVyChB89a_rNzB';
        const secretKey = 'eA-Shnk9pGQlbVxzHx2qpWhhl-hgforCD8MNRuFx';
        const bucket = 'image';        
        let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
        let options = {
            scope: bucket,
            expires: 3600 * 24
        };
        let putPolicy =  new qiniu.rs.PutPolicy(options);
        let uploadToken= putPolicy.uploadToken(mac);
        return reqJson(200,uploadToken,"")
    }

    //删除七牛云资源
    @Post('deleteUploadFile')
    deleteUploadFile(){
        
    }

}
