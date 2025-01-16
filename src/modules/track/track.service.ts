import { Injectable, Logger } from '@nestjs/common';
import { ClickHouseService, ClickHouseTableEnum } from '@/supports';
import { TractConvert } from './tract.convert';
import { CreateTrackDTO } from './dto';

@Injectable()
export class TrackService {
  constructor(
    private readonly tractConvert: TractConvert,
    private readonly clickHouseService: ClickHouseService,
  ) {}
  private readonly logger = new Logger(TrackService.name);
  async create(createTrackDTO: CreateTrackDTO) {
    const insertData = this.tractConvert.toInsertEntity(createTrackDTO);
    this.logger.log(insertData);
    await this.clickHouseService.create(
      ClickHouseTableEnum.client_event_tracking_buffer,
      insertData,
    );
  }
}
