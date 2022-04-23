import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class UpdateNoteDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly name?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(['Task', 'Random Thought', 'Idea'])
  readonly category?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly content?: string;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  readonly archived?: boolean;
}
