import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../../mysql_entity/auth.entity';
import { GetUserDataDto,LoginDto,RegisterDto,NickNameDto }  from './dto/auth.dto'
import { reqJson } from '../../common/req.json'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  loginUser(query:LoginDto):Promise<Auth>{
   return  this.authRepository.findOne({userName:query.userName,password:query.password});
  }

   registerUser(body:RegisterDto):Promise<object>{
    return this.authRepository.save(body)
  }

  async findUserData(params:GetUserDataDto):Promise<object> {
    // let user = await this.authRepository
    // .createQueryBuilder('user')
    // .select(['user.id','user.userName'])
    // .where("user.id = :id", { id: params.id })
    // .getOne();
    let user = await this.authRepository.findOne({
      select:['id','userName'],
      where:[
        {id:params.id}
      ]
    })
    return reqJson(200,user,'')
  }

  async updateNickName(query:NickNameDto):Promise<object>{
    let user=await this.authRepository.update({id:query.id},{nickName:query.nickName});    
    return reqJson(200,user,"修改成功！")
  }

}
