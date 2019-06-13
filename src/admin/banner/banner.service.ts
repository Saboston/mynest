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

    async getBanner(query:GetBannerDto):Promise<[Banner[],number]>{
        let data= await this.bannerRepository.findAndCount({
            where:[
                {type:query.type}
            ],
            skip: 2, 
            take: 5
        });
        return data;
    }

}
