export function reqJson(code:number,data:any,msg:string){
    return {
        code:code,
        data:data===undefined||null,
        msg:msg
    }
}