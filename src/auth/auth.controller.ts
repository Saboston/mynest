import { Controller,Get,Query,Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserDataDto }  from './dto/getUserData.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

  @Get('getUserData')
    getUserData(@Query() query: GetUserDataDto) {
    return this.authService.findAll(query);
  }

  @Get('getUserDatas/:id/:userName')
    getUserDatas(@Param() params:GetUserDataDto) {
    return this.authService.findAll(params);
  }
}
