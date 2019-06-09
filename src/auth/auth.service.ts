import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../entity/auth.entity';
import { GetUserDataDto,LoginDto }  from './dto/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  async loginUser(query:LoginDto):Promise<object>{
    let isUser=await this.authRepository.findOne({userName:query.userName,password:query.password});
    if(isUser){
      return {
        data:'登录成功！',
      }   
    }else{
      return {
        data:"用户名或密码不正确！"
      }  
    }    
  }

  async findUserData(params:GetUserDataDto):Promise<object> {
    return {
      data: await this.authRepository.find({id:params.id}),
    }
  }
}
