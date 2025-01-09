import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthInterceptor, WrappendResponseInterceptor } from '@/interceptor';
import { TrackService } from './track.service';
import { CreateTrackDTO } from './dto';

@ApiTags('Tract')
@ApiBearerAuth()
@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}
  @ApiOperation({ summary: '创建记录' })
  @UsePipes(ValidationPipe)
  @UseInterceptors(AuthInterceptor, WrappendResponseInterceptor)
  @Post('create')
  create(@Body() createTrackDTO: CreateTrackDTO) {
    return this.trackService.create(createTrackDTO);
  }
}
