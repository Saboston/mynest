import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Banner } from '../../mysql_entity/banner.entity';
import { BannerTypes } from '../../mysql_entity/bannerTypes.entity';
import { GetBannerDto, SaveBannerDto } from './dto/banner.dto';

@Injectable()
export class BannerService {
    constructor(
        @InjectRepository(Banner)      
        private readonly bannerRepository: Repository<Banner>,
        @InjectRepository(BannerTypes)
        private readonly bannerTypesRepository: Repository<BannerTypes>,
    ) { }

    //获取图片
    async getBanner(query: GetBannerDto): Promise<[Banner[], number]> {
        let data = await this.bannerRepository.findAndCount({
            where: [
                { type: query.type }
            ],
            skip: ((query.page - 1) || 0) * query.limit,
            take: query.limit
        });
        return data;
    }

    //获取图片类型
    async getBannerTypes(query): Promise<[BannerTypes[], number]> {
        let data = await this.bannerTypesRepository.findAndCount({
            skip: ((query.page - 1) || 0) * query.size,
            take: query.size
        });
        return data;
    }

    //保存图片信息
    saveBannerData(query: SaveBannerDto): Promise<object> {
        let data = this.bannerRepository.save(query);
        return data;
    }

}
