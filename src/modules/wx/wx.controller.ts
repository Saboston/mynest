import { Controller, Get, Post, Query, Param, Body, Req, Res } from '@nestjs/common';
import { ApiOperation,ApiUseTags } from '@nestjs/swagger';
import { WxService } from './wx.service';
import { reqJson,reqInterface } from '../../common/req.json';
import { AuthService } from '../auth/auth.service'

@ApiUseTags('wx')
@Controller('wx')
export class WxController {
  constructor(
    private readonly wxService: WxService,
    private readonly authService: AuthService
  ) { }

  @ApiOperation({ title: "上传code查询用户是否已注册" })
  @Get('wxIsRegiter')
  async wxIsRegiter(@Query('code') code:string): Promise<reqInterface> {
    let code2Session = await this.wxService.getOpenId(code);
    if(code2Session){
      let openid = JSON.parse(code2Session).openid;
      let userData = await this.authService.searchOpenId(openid);
      if(userData){
        return new reqJson(userData)
      }else{
        let result = await this.authService.registerUser({openid:openid});
        return new reqJson(result)
      }
    }else{
      return new reqJson(null,202,'不存在')
    }
  }

  //H5测试签名
  //@ApiOperation({ title: "获取签名" })
  // @Post('getSignture')
  // getUserDatas(@Body() body): Promise<object> {
  //   return this.wxService.signture(body)
  // }

}
