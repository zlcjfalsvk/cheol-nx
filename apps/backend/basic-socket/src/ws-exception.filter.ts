import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';
import { ArgumentsHost, Catch } from '@nestjs/common';

@Catch(WsException)
export class WsExceptionFilter<T> extends BaseWsExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }

  handleError(client: any, exception: any) {
    client.emit('error', exception.error);
  }
}
