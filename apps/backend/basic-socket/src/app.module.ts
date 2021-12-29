import { Module } from '@nestjs/common';

import { EventsModule } from './modules';

@Module({
  imports: [EventsModule],
})
export class AppModule {}
