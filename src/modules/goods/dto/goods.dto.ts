import { ApiModelProperty } from '@nestjs/swagger';

export class GetGoodsDto {
    @ApiModelProperty()
    readonly category: number;

    @ApiModelProperty()
    readonly page?: number;

    @ApiModelProperty()
    readonly size?: number;
}