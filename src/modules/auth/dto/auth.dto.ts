import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
    @ApiModelProperty({ description: "必填" })
    readonly userName: string;

    @ApiModelProperty()
    readonly password: string;
}

export class RegisterDto {
    @ApiModelProperty()
    readonly openid: string;
}

export class NickNameDto {
    @ApiModelProperty()
    readonly nickName: string;
}