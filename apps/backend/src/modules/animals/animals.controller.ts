import { Controller, Get } from '@nestjs/common';

import type { ApiResponseInterface } from '@cheol-nx/api-interfaces';

import { ApiResponseDto } from '../../api-response.dto';

@Controller('animals')
export class AnimalsController {
  @Get()
  hellow(): ApiResponseInterface<string> {
    return new ApiResponseDto({
      data: 'hellow',
    });
  }
}
