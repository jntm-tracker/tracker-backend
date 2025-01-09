import { Module } from '@nestjs/common';
import { ContextModule, ClickHouseModule } from '@/supports';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { TractConvert } from './tract.convert';

@Module({
  imports: [ClickHouseModule, ContextModule],
  controllers: [TrackController],
  providers: [TrackService, TractConvert],
  exports: [TrackService, TractConvert],
})
export class TrackModule {}
