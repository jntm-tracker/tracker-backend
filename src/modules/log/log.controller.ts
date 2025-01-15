import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { LogService } from './log.service';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiExcludeEndpoint,
} from '@nestjs/swagger';
import { AuthInterceptor, WrappendResponseInterceptor } from '@/interceptor';

@ApiTags('log')
@ApiBearerAuth()
@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}
  @ApiExcludeEndpoint()
  @ApiOperation({ summary: '创建用户行为记录' })
  @UsePipes(ValidationPipe)
  @UseInterceptors(AuthInterceptor, WrappendResponseInterceptor)
  @Post('/user-action/create')
  create(@Body() createUserActionDTO: any) {
    return this.logService.createUserActionLog(createUserActionDTO);
  }
}
