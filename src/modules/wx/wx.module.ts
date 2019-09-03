import { Module } from '@nestjs/common';
import { SigntureController } from './wx.controller';
import { SigntureService } from './wx.service';

@Module({
    controllers: [SigntureController],
    providers: [SigntureService]
})
export class WxModule { }
