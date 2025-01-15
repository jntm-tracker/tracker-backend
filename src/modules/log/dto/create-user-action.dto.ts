import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ActionTypeEnum } from '@/enum';

export class CreateUserActionDTO {
  actions: UserAction[];
}

export class UserAction {
  @ApiProperty({
    description: '行为类型',
    enum: ActionTypeEnum,
    required: true,
    example: '',
  })
  @IsNotEmpty()
  @IsEnum(ActionTypeEnum)
  eventType: ActionTypeEnum;

  @ApiProperty({
    description: '操作节点',
    type: 'string',
    required: true,
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  clickDom: string;

  @ApiProperty({
    description: '操作页面路径',
    type: 'string',
    required: true,
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  pathname: string;

  @ApiProperty({
    description: '用户本地时间',
    type: 'string',
    required: true,
    example: '2024-10-24 17:16:40',
  })
  @IsNotEmpty()
  @IsString()
  time: string;
}
