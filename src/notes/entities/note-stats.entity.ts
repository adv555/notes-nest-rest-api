import { ApiProperty } from '@nestjs/swagger';

export class Statistics {
  @ApiProperty({ type: String, example: 'Task' })
  category: string;

  @ApiProperty({ type: Number, example: 3 })
  total: number;

  @ApiProperty({ type: Number, example: 1 })
  archived: number;

  @ApiProperty({ type: Number, example: 2 })
  active: number;
}
