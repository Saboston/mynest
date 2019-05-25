import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('aaa')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('rest')
  getHello(): string {
    return this.appService.getHello();
  }
}
