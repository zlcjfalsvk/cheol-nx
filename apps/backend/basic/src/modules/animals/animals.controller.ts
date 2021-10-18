import { Controller, Get, Query } from '@nestjs/common';

import type { ApiResponseInterface } from '@cheol-nx/api-interfaces';

import { BackendAnimalsGetParamDto } from './dtos';
import { ApiResponseDto } from '../../api-response.dto';

@Controller('animals')
export class AnimalsController {
  @Get()
  hellow(
    @Query() param: BackendAnimalsGetParamDto
  ): ApiResponseInterface<string> {
    return new ApiResponseDto({
      data: `Hellow ${param.name}`,
    });
  }
}
