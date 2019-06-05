import { Controller,Get,Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserDataDto }  from './dto/getUserData.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

  @Get()
    getUserData(@Query() query: GetUserDataDto) {
    return this.authService.findAll(query.id);
  }

}
