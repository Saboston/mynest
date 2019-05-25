import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('aaa')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
