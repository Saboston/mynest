import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from '../../mysql_entity/about.entity'

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  controllers: [AboutController],
  providers: [AboutService]
})
export class AboutModule {}
