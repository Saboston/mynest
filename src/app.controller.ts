import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('aaa')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get()
  // getBye(): string {
  //   return `byebye`;
  // }

  @Get(':id')
  getHello(@Param('id') id: string) {

    return this.appService.getHello()+`${id}`+``;
  }

}
