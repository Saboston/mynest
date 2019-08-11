import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Banner } from '../../mysql_entity/banner.entity'
import { GetBannerDto } from './dto/banner.dto';

@Injectable()
export class BannerService {
    constructor(
        @InjectRepository(Banner)
        private readonly bannerRepository: Repository<Banner>,
    ) {}

    //获取图片
    async getBanner(query:GetBannerDto):Promise<[Banner[],number]>{
        let data= await this.bannerRepository.findAndCount({
            where:[
                {type:query.type}
            ],
            skip: ((query.page-1)||0)*query.size, 
            take: query.size
        });
        return data;
    }

}
