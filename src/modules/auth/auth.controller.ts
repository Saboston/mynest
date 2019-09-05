import { Controller, Get, Post, Query, Param, Body, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, NickNameDto } from './dto/auth.dto'
import { reqJson, reqInterface } from '../../common/req.json';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from '../../shared/decorators/user.decorator'
import { Auth } from '../../mysql_entity/auth.entity';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { Response, Request } from 'express';

@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({ title: "用户登录" })
  @Get('login')
  async login(@Query() query: LoginDto, @Res() res: Response): Promise<reqInterface> {
    let token: string;
    const user = await this.authService.findUser(query);
    if (user) {
      token = 'Bearer ' + await this.authService.signIn(user.id);
      res.cookie("Authorization", token, { maxAge: 60 * 1000 })
      res.send(new reqJson(null, 200, '登录成功！'));
    } else {
      return new reqJson(null, 201, "用户名或密码不正确！")
    }
  }

  @ApiOperation({ title: "查询个人信息" })
  @Get('getUserData')
  @UseGuards(JwtAuthGuard)
  async getUserDatas(@AuthUser() user: Auth): Promise<reqInterface> {
    let userData = await this.authService.findUserData(user);
    return new reqJson(userData)
  }

  @ApiOperation({ title: "更新昵称" })
  @Get('updateNickName')
  @UseGuards(AuthGuard())
  async updateNickName(@Query() query: NickNameDto, @AuthUser() user: Auth): Promise<reqInterface> {
    let useData = await this.authService.updateNickName(query, user);
    if (useData) {
      return new reqJson(null, 200, "修改成功！")
    } else {
      return new reqJson(null, 200, "修改失败！")
    }
  }

}
