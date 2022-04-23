import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({ type: String, example: 'My first note' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    type: String,
    enum: ['Task', 'Random Thought', 'Idea'],
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(['Task', 'Random Thought', 'Idea'])
  readonly category: string;

  @ApiProperty({
    type: String,
    example: 'This is my first note from 2022-04-15',
  })
  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @ApiProperty({ type: Boolean, example: false })
  @IsBoolean()
  @IsOptional()
  readonly archived: boolean;
}
