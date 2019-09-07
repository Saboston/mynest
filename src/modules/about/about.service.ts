import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { About } from '../../mysql_entity/about.entity';

@Injectable()
export class AboutService {
    constructor(
        @InjectRepository(About)
        private readonly aboutRepository: Repository<About>,
    ) { }

    //关于我们介绍
    async getAboutUs(): Promise<About[]> {
        let about = await this.aboutRepository.find()
        return about;
    }
}
