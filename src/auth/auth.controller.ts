import { Controller,Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getUserData(): object {
    return this.authService.findAll();
  }
  
  @Get('list')
    getList(): string {
    return '123';
  }

}