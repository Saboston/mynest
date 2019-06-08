import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../entity/auth.entity';
import { GetUserDataDto }  from './dto/getUserData.dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  async findAll(params:GetUserDataDto):Promise<object> {
    return {
      a: await this.authRepository.find({userName:params.userName}),
    }
  }
}
