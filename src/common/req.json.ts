export interface reqInterface {
    data: any,
    code?: number,
    msg?: string
}

export function reqJson(data: any, code: number = 200, msg: string = "") {
    return {
        code: code,
        data: data || null,
        msg: msg
    }
}