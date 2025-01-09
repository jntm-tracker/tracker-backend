/**
 * 插入clickhouse参数
 */
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTrackDTO } from './create-track.dto';

export class InsertTrackTableDTO extends CreateTrackDTO {
  @ApiProperty({
    description: '服务器时间',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  serverTime: string;

  @ApiProperty({
    description: 'CAS用户ID',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'CAS用户名',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  userName: string;

  @ApiProperty({
    description: 'User Agent',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  userAgent: string;

  @ApiProperty({
    description: '操作系统',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  os: string;

  @ApiProperty({
    description: '浏览器信息',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  browser: string;

  @ApiProperty({
    description: '设备信息',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  device: string;
}
