import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../../mysql_entity/auth.entity';
import { LoginDto,RegisterDto,NickNameDto }  from './dto/auth.dto'
import { reqJson } from '../../common/req.json'
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/auth.interfaces';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,

  ) {}

  //生成token
  async signIn(id:number): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user: JwtPayload = await { id: id };   
    return this.jwtService.sign(user);
  }

  //验证token
  async validateUser(payload: JwtPayload): Promise<any> {
    return  this.authRepository.findOne({id:payload.id});
  }

  //查找用户
  findUser(query:LoginDto):Promise<Auth>{  
   return  this.authRepository.findOne(query);
  }

  //注册
   registerUser(body:RegisterDto):Promise<object>{
    return this.authRepository.save(body)
  }

  //查询个人信息
  async findUserData(user:Auth):Promise<object> {
    // let user = await this.authRepository
    // .createQueryBuilder('user')
    // .select(['user.id','user.userName'])
    // .where("user.id = :id", { id: params.id })
    // .getOne();

    let userData = await this.authRepository.findOne({
      select:['id','userName'],
      where:[
        {id:user.id}
      ]
    })
    return reqJson(200,userData,'')
  }

  //更新昵称
  async updateNickName(query:NickNameDto,user:Auth):Promise<object>{
    let useData=await this.authRepository.update({id:user.id},{nickName:query.nickName});
    if(useData){
      return reqJson(200,null,"修改成功！")
    }else{
      return reqJson(200,null,"修改失败！")
    }

  }

}
