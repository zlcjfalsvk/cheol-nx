import { AnimalEnum } from '@cheol-nx/common';
import { IsString } from 'class-validator';

import type { BackendAnimalsGetParamInterface } from '@cheol-nx/api-interfaces';

export class BackendAnimalsGetParamDto
  implements BackendAnimalsGetParamInterface
{
  @IsString()
  name: AnimalEnum;
}
