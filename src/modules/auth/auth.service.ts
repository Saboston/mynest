import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../../mysql_entity/auth.entity';
import { LoginDto, RegisterDto, NickNameDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/auth.interfaces';

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) { }

  //生成token
  async signIn(id: number): Promise<string> {
    const user: JwtPayload = { id: id };
    return this.jwtService.sign(user);
  }

  //验证token
  async validateUser(payload: JwtPayload): Promise<any> {
    if (payload.exp - payload.iat < 1800) {
      const token = this.signIn(payload.id);
    }
    return this.authRepository.findOne({ id: payload.id });
  }

  //查找用户
  async findUser(query: LoginDto): Promise<Auth> {
    return await this.authRepository.findOne(query);
  }

  //根据openid注册账户
  async registerUser(body: RegisterDto): Promise<object> {
    return await this.authRepository.save(body)
  }

  //查询个人信息
  async findUserData(user: Auth): Promise<object> {
    // let user = await this.authRepository
    // .createQueryBuilder('user')
    // .select(['user.id','user.userName'])
    // .where("user.id = :id", { id: params.id })
    // .getOne();
    return this.authRepository.findOne({
      select: ['id', 'nickName'],
      where: [
        { id: user.id }
      ]
    })

  }

  //更新昵称
  async updateNickName(query: NickNameDto, user: Auth): Promise<object> {
    return this.authRepository.update({ id: user.id }, { nickName: query.nickName });
  }

  //查找openId
  async searchOpenId(openid: string): Promise<Auth> {
    return await this.authRepository.findOne({ openid: openid })
  }

}
