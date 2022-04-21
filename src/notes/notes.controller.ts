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
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAll() {
    return this.notesService.getAll();
  }
  @Get('/stats')
  getStats(): string {
    return 'Get stats';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.notesService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Patch('/:id')
  update(
    @Body() updateNoteDto: UpdateNoteDto,
    @Param('id') id: string,
  ): string {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): string {
    return `Removed note with id: ${id}`;
  }
}
