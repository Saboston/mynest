import { Controller,Get,Post,Query,Param,Body,UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserDataDto,LoginDto,RegisterDto,NickNameDto }  from './dto/auth.dto'
import { reqJson } from '../../common/req.json'
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from '../../shared/decorators/user.decorator'
import { Auth } from '../../mysql_entity/auth.entity';

@Controller('auth')
export class AuthController {
    constructor(
      private readonly authService: AuthService,
      ) {}

    @Get('login')     //登录
    async login(@Query() query:LoginDto):Promise<object> {
      const data={ 
        token:""
      };
      const user= await this.authService.findUser(query);
      if(user){
        data.token= 'Bearer '+ await this.authService.signIn(user.id);
        return reqJson(200,data,'登录成功！')
      }else{
        return reqJson(201,data,"用户名或密码不正确！")
      }
    }

    @UseGuards(AuthGuard())
    @Get('getUserData')   //查询个人信息
    getUserDatas(@AuthUser() user: Auth):Promise<object> {
      return  this.authService.findUserData(user)
    }

    @Post('register')   //注册
    async registerUser(@Body() body:RegisterDto):Promise<object> {
      let register = await this.authService.registerUser(body);
      return reqJson(200,register,"注册成功！")
    }

    @Get('updateNickName')    //更新昵称
    @UseGuards(AuthGuard())
    async updateNickName(
      @Query() query:NickNameDto,
      @AuthUser() user: Auth,
      ):Promise<object> {            
      return this.authService.updateNickName(query,user);
    }

}
