export class PaginationOptionInterface {
    page?: number;
    limit?: number;
}

export class PaginationResultInterface<PaginationEntity> {
    list?: PaginationEntity[];
    total?: number;
}

export class PaginationResult<PaginationEntity>{
    public list: PaginationEntity[];
    public next: number;
    public totalPages: number;
    public total: number;

    constructor(query:PaginationOptionInterface,paginationResults?: PaginationResultInterface<PaginationEntity>) {
        this.list = paginationResults.list || [];
        this.totalPages = Math.ceil(paginationResults.total / query.limit) || 1;
        this.next = this.totalPages>query.page?++query.page:0
        this.total = paginationResults.total;
    }
}

export class PaginationOption {
    public skip?: number;
    public take?: number;
    public options?: object;
    public order?: object;

    constructor(paginationOptions: PaginationOptionInterface, options?: object) {
        this.skip = ((paginationOptions.page - 1) || 0) * paginationOptions.limit;
        this.take = paginationOptions.limit;
        this.order = {['id']:-1};
        this.options = Object.assign(this, options);
    }
}