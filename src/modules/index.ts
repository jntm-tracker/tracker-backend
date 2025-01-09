import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';

@Module({
  imports: [TrackModule],
  exports: [TrackModule],
})
export class ModulesModule {}
