import { ApiModelProperty } from '@nestjs/swagger';
import { PaginationDto } from '../../../common/pagination';

export class GetBannerDto extends PaginationDto {
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