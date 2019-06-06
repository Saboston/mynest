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

   findAll(id:number,userName:string): Promise<Auth[]> {
    return  this.authRepository.find({id:id,userName:userName});
  }
}
