import { createParamDecorator } from '@nestjs/common';

export const AuthUser = createParamDecorator((req, data) => {
  return data.user
});