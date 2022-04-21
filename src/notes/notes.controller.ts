import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';
import { Note } from './schemas/note.schema';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAll(): Promise<Note[]> {
    return this.notesService.getAll();
  }
  @Get('/stats')
  getStats(): string {
    return 'Get stats';
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Promise<Note> {
    return this.notesService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return this.notesService.create(createNoteDto);
  }

  @Put('/:id')
  update(
    @Body() updateNoteDto: UpdateNoteDto,
    @Param('id') id: string,
  ): Promise<Note> {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): Promise<Note> {
    return this.notesService.delete(id);
  }
}
