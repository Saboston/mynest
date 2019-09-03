import { ApiModelProperty } from '@nestjs/swagger';

export class GetMenuDto {
    @ApiModelProperty()
    readonly type: string;

    @ApiModelProperty()
    readonly page?: number;

    @ApiModelProperty()
    readonly size?: number;

}