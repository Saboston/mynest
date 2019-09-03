import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
    @ApiModelProperty({ description: "必填" })
    readonly userName: string;

    @ApiModelProperty()
    readonly password: string;
}

export class RegisterDto {
    @ApiModelProperty()
    readonly userName: string;

    @ApiModelProperty()
    readonly password: string;

    @ApiModelProperty()
    readonly confirmPass: string;

    @ApiModelProperty()
    readonly phone: number;
}

export class NickNameDto {
    @ApiModelProperty()
    readonly nickName: string;
}