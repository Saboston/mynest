import { Controller,Get,Post,Query,Param,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserDataDto,LoginDto,RegisterDto,NickNameDto }  from './dto/auth.dto'
import { reqJson } from '../../common/req.json'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('login')
    async login(@Query() query:LoginDto):Promise<object> {
      let login=await this.authService.loginUser(query);
      if(login){
        return reqJson(200,login,'登录成功！')
      }else{
        return reqJson(201,login,"用户名或密码不正确！")
      }    
    }

    @Get('getUserData/:id')
    getUserDatas(@Param() params:GetUserDataDto):object {
      return this.authService.findUserData(params);
    }

    
    @Post('register')
    async registerUser(@Body() body:RegisterDto):Promise<object> {
      let register = await this.authService.registerUser(body);
      return reqJson(200,register,"注册成功！")
    }

    @Get('updateNickName')
    updateNickName(@Query() query:NickNameDto):object {      
      return this.authService.updateNickName(query);
    }

}
