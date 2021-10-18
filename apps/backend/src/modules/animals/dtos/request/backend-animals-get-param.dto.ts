import { IsEnum, IsString } from 'class-validator';

import { AnimalEnum } from '@cheol-nx/common';
import type { BackendAnimalsGetParamInterface } from '@cheol-nx/api-interfaces';

export class BackendAnimalsGetParamDto
  implements BackendAnimalsGetParamInterface
{
  @IsEnum(AnimalEnum)
  @IsString()
  name: AnimalEnum;
}
