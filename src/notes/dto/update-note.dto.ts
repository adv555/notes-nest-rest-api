import { Category } from './../../shared/enum';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class UpdateNoteDto {
  @ApiPropertyOptional({
    type: String,
    example: 'My updated note',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly name?: string;

  @ApiPropertyOptional({
    type: String,
    enum: Category,
    example: 'Task',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(['Task', 'Random Thought', 'Idea'])
  readonly category?: string;

  @ApiPropertyOptional({
    type: String,
    example: 'This is my updated note content',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly content?: string;

  @ApiPropertyOptional({ type: Boolean, example: false, required: false })
  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  readonly archived?: boolean;
}
