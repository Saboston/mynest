import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../entity/auth.entity';
import { GetUserDataDto,LoginDto }  from './dto/auth.dto'
import { reqJson } from '../common/req.json'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  async loginUser(query:LoginDto):Promise<object>{

    let isUser:Auth=await this.authRepository.findOne({userName:query.userName,password:query.password});
    if(isUser){
      return reqJson(200,isUser,'登录成功！')
    }else{
      return reqJson(201,isUser,"用户名或密码不正确！")
    }    

  }

  async findUserData(params:GetUserDataDto):Promise<object> {

    const user:Auth = await this.authRepository
    .createQueryBuilder('user')
    .select(['user.id','user.userName'])
    .where("user.id = :id", { id: params.id })
    .getOne();
    return reqJson(200,user,'')
  }

}
