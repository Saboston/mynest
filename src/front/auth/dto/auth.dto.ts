export class GetUserDataDto {
    readonly id: number;
}
export class LoginDto {
    readonly userName: string;
    readonly password:string;
}

export class RegisterDto {
    readonly userName: string;
    readonly password: string;
    readonly confirmPass: string;
    readonly phone: number;    
}

export class NickNameDto {
    readonly nickName:string;
    readonly id:number;    
}