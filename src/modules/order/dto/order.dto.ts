import { ApiModelProperty } from '@nestjs/swagger';
import { PaginationOptionInterface } from '../../../common/pagination';

export class GetOrdersDto extends PaginationOptionInterface {
    @ApiModelProperty()
    readonly type: number;
}

