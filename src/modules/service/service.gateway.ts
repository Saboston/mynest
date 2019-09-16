import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Client, Server } from 'socket.io';
  
  @WebSocketGateway()
  export class ServiceGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    findAll(client: Client, data: any): Observable<WsResponse<number>> {
      console.log(1);
      
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
  
    @SubscribeMessage('identity')
    async identity(client: Client, data: number): Promise<number> {
      console.log(2);
      return data;
    }
  }