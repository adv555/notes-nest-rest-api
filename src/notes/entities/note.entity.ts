import { ApiProperty } from '@nestjs/swagger';

export class Note {
  @ApiProperty({ type: String, example: '123' })
  id: string;

  @ApiProperty({ type: String, example: 'My first note' })
  name: string;

  @ApiProperty({ type: String, example: '2022-04-15' })
  createdAt: Date | string;

  @ApiProperty({ type: String, example: 'Task' })
  category: string;

  @ApiProperty({
    type: String,
    example: 'This is my first note content from 2022-04-15',
  })
  content: string;
  @ApiProperty({ type: [String], example: ['2022-04-15'] })
  date: string[] | [];

  @ApiProperty({ type: Boolean, example: false })
  archived: boolean;
}
