import { IsObject, IsString } from 'class-validator';

import type { BackendBasicSocketEventsInterface } from '@cheol-nx/socket-interfaces';

export class BackendBasicSocketEventsDto implements BackendBasicSocketEventsInterface {
  @IsString()
  type: string;

  @IsObject()
  body: unknown;
}
