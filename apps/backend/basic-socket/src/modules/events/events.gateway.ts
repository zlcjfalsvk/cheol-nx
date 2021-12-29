import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsException,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'net';
import { UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

import { BackendBasicSocketEventsDto } from './dtos';
import { WsExceptionFilter } from '../../ws-exception.filter';

@WebSocketGateway()
@UseFilters(new WsExceptionFilter())
@UsePipes(
  new ValidationPipe({
    transform: true,
    exceptionFactory: (errors) => {
      errors.forEach((error) => {
        if (error instanceof ValidationError) {
          for (const [constraintKey, constraint] of Object.entries(error.constraints)) {
            if (constraint) {
              throw new WsException(error.constraints[constraintKey]);
            }
          }
          throw new WsException(error.constraints);
        } else {
          throw new WsException(errors);
        }
      });
    },
  }),
)
export class EventsGateway {
  @SubscribeMessage('events')
  handleEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: BackendBasicSocketEventsDto,
  ): WsResponse {
    console.log(data);
    if (data.type === 'error') {
      throw new WsException('error');
    }
    return { event: 'events', data: 'events Received data' };
  }

  @SubscribeMessage('message')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() data: unknown): WsResponse {
    return { event: 'message', data: 'message Received data - ' + data };
  }
}
