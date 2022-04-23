import { notesRepository } from '../db/repository';
import { getDateFromContent } from './../shared/getDateFromContent';
import { UpdateNoteDto } from './dto/update-note.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

export interface Note {
  id: string;
  name: string;
  createdAt: Date | string;
  category: string;
  content: string;
  date: string[] | [];
  archived: boolean;
}
export interface NoteStats {
  category: string;
  total: number;
  archived: number;
  active: number;
}

@Injectable()
export class NotesService {
  async getAll(): Promise<Note[]> {
    const notes = await notesRepository.getAll();
    return notes;
  }

  async generateStats(): Promise<NoteStats> {
    const notes = await notesRepository.getAll();
    const statistics = notes.reduce((stats: NoteStats[], note: Note) => {
      const category = stats.find((stat) => stat.category === note.category);
      if (!category) {
        return [
          ...stats,
          {
            category: note.category,
            total: 1,
            archived: note.archived ? 1 : 0,
            active: note.archived ? 0 : 1,
          },
        ];
      }
      category.total += 1;
      note.archived ? category.archived++ : category.active++;

      return stats;
    }, []);

    return statistics;
  }
  async getById(id: string): Promise<Note> {
    const note = await notesRepository.getById(id);
    if (!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    return note;
  }

  async create(noteDto: CreateNoteDto): Promise<Note> {
    const note: Note = {
      id: Date.now().toString(),
      name: noteDto.name,
      category: noteDto.category,
      content: noteDto.content,
      date: getDateFromContent(noteDto.content),
      archived: noteDto?.archived || false,
      createdAt: new Date().toISOString().split('T')[0],
    };

    notesRepository.create(note);
    return note;
  }
  async update(id: string, noteDto: UpdateNoteDto): Promise<Note> {
    const foundNote = await this.getById(id);

    if (!foundNote) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    const note: Note = {
      ...foundNote,
      ...noteDto,
    };

    notesRepository.update(id, note);
    return note;
  }

  async deleteById(id: string): Promise<any> {
    const foundNote = await this.getById(id);

    if (!foundNote) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }

    notesRepository.deleteById(id);
    return `Note with id: ${id} deleted`;
  }
}
