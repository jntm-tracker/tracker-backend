/**
 * 前端提交参数
 */
import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsOptional,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TrackerEventTypeEnum } from '../enum';

export class CreateTrackDTO {
  @ApiProperty({
    description: '验证token',
    type: 'string',
    required: false,
    example: '',
  })
  @IsOptional()
  @IsString()
  authorization?: string;

  @ApiProperty({
    description: '版本号',
    type: 'string',
    required: true,
    example: '1.0',
  })
  @IsNotEmpty()
  @IsString()
  version: string;

  @ApiProperty({
    description: '客户端ID',
    type: 'string',
    required: true,
    example: 'crm',
  })
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @ApiProperty({
    description: '会话ID',
    type: 'string',
    required: true,
    example: '123213123123123',
  })
  @IsNotEmpty()
  @IsString()
  sessionId: string;

  @ApiProperty({
    description: '事件创建时间',
    type: 'string',
    required: true,
    example: '2024-10-24 17:16:40',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
    message: 'time must be in the format YYYY-MM-DD HH:MM:SS',
  })
  time: string;

  @ApiProperty({
    description: '埋点操作类型',
    enum: TrackerEventTypeEnum,
    required: true,
    example: 'page_open',
  })
  @IsNotEmpty()
  @IsEnum(TrackerEventTypeEnum)
  eventType: TrackerEventTypeEnum;

  @ApiProperty({
    description: '当前页面url',
    type: 'string',
    required: true,
    example: 'https://crm-uat.moligroup.com/data-statistics',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    description: '当前页面路径',
    type: 'string',
    required: true,
    example: 'data-statistics',
  })
  @IsNotEmpty()
  @IsString()
  pathname: string;

  @ApiProperty({
    description: '页面标题',
    type: 'string',
    required: false,
    example: '销售周报',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: '埋点类目',
    type: 'string',
    required: false,
    example: '签约目标达成概况',
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({
    description: '埋点名称',
    type: 'string',
    required: true,
    example: '签约目标达成概况查询',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: '额外信息补充字段，json字符串',
    type: 'string',
    required: false,
    example: '{"test":1}',
  })
  @IsOptional()
  @IsString()
  extra?: string;
}
