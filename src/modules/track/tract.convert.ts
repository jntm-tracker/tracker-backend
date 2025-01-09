import { Injectable, Logger } from '@nestjs/common';
import { ContextService } from '@/supports';
import { getCurrentTime } from '@/utils';
import { CreateTrackDTO, InsertTrackTableDTO } from './dto';

@Injectable()
export class TractConvert {
  constructor(private readonly contextService: ContextService) {}
  private readonly logger = new Logger(TractConvert.name);
  toInsertEntity(createTrackDTO: CreateTrackDTO) {
    let dto = new InsertTrackTableDTO();
    dto = createTrackDTO as InsertTrackTableDTO;
    const userAgentInfo = this.contextService.userAgentInfoHolder();
    const userInfo = this.contextService.userInfoHolder();
    dto.serverTime = getCurrentTime();
    dto.userId = userInfo?.id ? userInfo?.id.toString() : null;
    dto.userName = userInfo?.userName ?? null;
    dto.userAgent = userAgentInfo?.userAgent ?? null;
    dto.os = userAgentInfo?.os ?? null;
    dto.browser = userAgentInfo?.browser ?? null;
    dto.device = userAgentInfo?.device ?? null;
    return dto;
  }
}
