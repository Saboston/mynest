import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Banner } from '../../mysql_entity/banner.entity';
import { BannerTypes } from '../../mysql_entity/bannerTypes.entity';
import { GetBannerDto, SaveBannerDto } from './dto/banner.dto';
import { PaginationResult, PaginationOption } from '../../common/pagination';

@Injectable()
export class BannerService {
    constructor(
        @InjectRepository(Banner)
        private readonly bannerRepository: Repository<Banner>,
        @InjectRepository(BannerTypes)
        private readonly bannerTypesRepository: Repository<BannerTypes>,
    ) { }

    //获取图片
    async getBanner(query: GetBannerDto): Promise<PaginationResult<Banner>> {
        let [list, total] = await this.bannerRepository.findAndCount(
            new PaginationOption(query, {
                where: [{ type: query.type }]
            })
        );
        return new PaginationResult<Banner>({
            list,
            total,
        });
    }

    //获取图片类型
    async getBannerTypes(query): Promise<PaginationResult<BannerTypes>> {
        let [list, total] = await this.bannerTypesRepository.findAndCount(
            new PaginationOption(query)
        );
        return new PaginationResult<BannerTypes>({
            list,
            total,
        });
    }

    //保存图片信息
    saveBannerData(query: SaveBannerDto): Promise<Banner> {
        let data = this.bannerRepository.save(query);
        return data;
    }

}
