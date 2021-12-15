import { Controller, Get, Post, Query } from '@nestjs/common';

import type { ApiResponseInterface } from '@cheol-nx/api-interfaces';

import { BackendAnimalsGetParamDto } from './dtos';
import { ApiResponseDto } from '../../api-response.dto';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}
  @Get()
  async hello(
    @Query() param: BackendAnimalsGetParamDto
  ): Promise<ApiResponseInterface<string>> {
    const name = await this.animalsService.greeting(param.name);
    return new ApiResponseDto({
      data: `Hellow ${name}`,
    });
  }

  @Post()
  async animalMap(): Promise<ApiResponseInterface<unknown>> {
    const json = await this.animalsService.showAnimalMap();
    return new ApiResponseDto<unknown>({
      data: json,
    });
  }
}
