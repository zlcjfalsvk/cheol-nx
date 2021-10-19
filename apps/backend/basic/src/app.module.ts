import { Module } from '@nestjs/common';

import { AnimalsModule } from './modules/animals/animals.module';

@Module({
  imports: [AnimalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
