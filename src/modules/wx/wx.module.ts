import { Module } from '@nestjs/common';
import { WxController } from './wx.controller';
import { WxService } from './wx.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [WxController],
    providers: [WxService,]
})
export class WxModule { }
