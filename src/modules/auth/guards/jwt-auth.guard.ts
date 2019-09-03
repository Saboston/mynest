import { ExecutionContext, Injectable, HttpException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpStatus } from '../../../common/constant'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (user) {
      return user;
    } else if (info.expiredAt) {
      throw new HttpException(HttpStatus.ExpiredToken, 200)
    } else {
      throw new HttpException(HttpStatus.WrongToken, 200)
    }
  }
}