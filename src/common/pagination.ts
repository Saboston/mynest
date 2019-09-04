export class PaginationOptionInterface {
    page?: number;
    limit?: number;
}

export class PaginationResultInterface<PaginationEntity> {
    list: PaginationEntity[];
    total: number
}

export class PaginationResult<PaginationEntity>{
    public list: PaginationEntity[];
    public total: number

    constructor(paginationResults: PaginationResultInterface<PaginationEntity>) {
        this.list = paginationResults.list;
        this.total = paginationResults.total;
    }
}

export class PaginationOption{
    public skip: number;
    public take: number;
    public options: object;
    
    constructor(paginationOptions:PaginationOptionInterface,options?:object) {
        this.skip = ((paginationOptions.page - 1) || 0) * paginationOptions.limit;
        this.take = paginationOptions.limit;
        this.options = Object.assign(this,options);
    }
}