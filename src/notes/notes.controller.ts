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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Statistics } from './entities/note-stats.entity';
import { Note } from './entities/note.entity';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @ApiOperation({
    summary: 'Get all notes',
  })
  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns all notes',
    type: [Note],
  })
  getAll(): Promise<Note[]> {
    return this.notesService.getAll();
  }

  @ApiOperation({
    summary: 'Get notes statistics',
  })
  @Get('/stats')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The notes statistics',
    type: Statistics,
  })
  getStats(): Promise<Statistics> {
    return this.notesService.generateStats();
  }

  @ApiOperation({
    summary: 'Get one note',
  })
  @Get('/:id')
  @ApiResponse({ status: HttpStatus.OK, description: 'Found note', type: Note })
  getOne(@Param('id') id: string): Promise<Note> {
    return this.notesService.getById(id);
  }

  @ApiOperation({
    summary: 'Create note',
  })
  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
    type: Note,
  })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return this.notesService.create(createNoteDto);
  }

  @ApiOperation({ summary: 'Update note' })
  @Patch('/:id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: Note,
  })
  update(
    @Body() updateNoteDto: UpdateNoteDto,
    @Param('id') id: string,
  ): Promise<Note> {
    return this.notesService.update(id, updateNoteDto);
  }

  @ApiOperation({ summary: 'Delete note' })
  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
  })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  remove(@Param('id') id: string): Promise<any> {
    return this.notesService.deleteById(id);
  }
}
