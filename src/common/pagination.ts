import { ApiModelProperty } from '@nestjs/swagger';

export class PaginationDto {

    @ApiModelProperty()
    readonly page?: number;

    @ApiModelProperty()
    readonly limit?: number;
}