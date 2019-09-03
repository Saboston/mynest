import { Controller, Get, Post, Query, Param, Body, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { SigntureService } from './wx.service'

@Controller('signture')
export class SigntureController {
  constructor(
    private readonly signtureService: SigntureService
  ) { }

  //H5测试签名
  @ApiOperation({ title: "获取签名" })
  @Post('getSignture')
  getUserDatas(
    @Body() body
  ): Promise<object> {
    return this.signtureService.signture(body)
  }

}
