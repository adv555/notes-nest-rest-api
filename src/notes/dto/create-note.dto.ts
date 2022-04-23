import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['Task', 'Random Thought', 'Idea'])
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsBoolean()
  @IsOptional()
  readonly archived: boolean;
}
