import { Module } from '@nestjs/common';

import { AnimalsController } from './animals.controller';

@Module({
  providers: [],
  controllers: [AnimalsController],
})
export class AnimalsModule {}
