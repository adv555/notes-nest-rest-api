import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note, NotesService, NoteStats } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAll(): Promise<Note[]> {
    return this.notesService.getAll();
  }

  @Get('/stats')
  getStats(): Promise<NoteStats> {
    return this.notesService.generateStats();
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

  @Patch('/:id')
  update(
    @Body() updateNoteDto: UpdateNoteDto,
    @Param('id') id: string,
  ): Promise<Note> {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): Promise<any> {
    return this.notesService.deleteById(id);
  }
}
