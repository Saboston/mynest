import { Controller,Get,Query,Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserDataDto,LoginDto }  from './dto/auth.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('login')
    login(@Query() query:LoginDto):object {
      return this.authService.loginUser(query)
    }

    @Get('getUserData/:id')
    getUserDatas(@Param() params:GetUserDataDto):object {
      return this.authService.findUserData(params);
    }

}
