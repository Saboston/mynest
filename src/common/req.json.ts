export interface reqInterface {
    data: any,
    code?: number,
    msg?: string
}

export class reqJson{
    public data:any;
    public code:number;
    public msg:string;
    constructor(data: any, code: number = 200, msg: string = ""){
        this.code = code,
        this.data = data || null,
        this.msg = msg
    } 
}