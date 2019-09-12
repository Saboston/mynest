import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceService {

    //发送聊天消息
    async sendMessage(): Promise<any> {
        return 1;
    }
    
}
