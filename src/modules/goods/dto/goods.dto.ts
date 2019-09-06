import { ApiModelProperty } from '@nestjs/swagger';
import { PaginationOptionInterface } from '../../../common/pagination';

export class GetGoodsDto extends PaginationOptionInterface {
    @ApiModelProperty()
    readonly category: number;
}

export class SearchGoodsDto extends PaginationOptionInterface {
    @ApiModelProperty()
    readonly name: string;
}
