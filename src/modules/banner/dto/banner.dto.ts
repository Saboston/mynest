import { ApiModelProperty } from '@nestjs/swagger';
import { PaginationOptionInterface } from '../../../common/pagination';

export class GetBannerDto extends PaginationOptionInterface{
    @ApiModelProperty()
    readonly type: string;
}

export class SaveBannerDto {
    @ApiModelProperty()
    readonly type: string;

    @ApiModelProperty()
    readonly remark: string;

    @ApiModelProperty()
    readonly imgUrl: string;
}