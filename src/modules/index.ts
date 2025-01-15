import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { LogModule } from './log/log.module';
@Module({
  imports: [TrackModule, LogModule],
  exports: [TrackModule, LogModule],
})
export class ModulesModule {}
