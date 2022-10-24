import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({})
class ScheduleModuleTest {}

@Module({
  imports: [
    ConfigModule,

  ],
  controllers: [],
  providers: [],
})
export class Application {}
