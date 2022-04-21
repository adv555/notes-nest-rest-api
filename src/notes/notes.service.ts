import { UpdateNoteDto } from './dto/update-note.dto';
import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  private notes = [];

  getAll() {
    return this.notes;
  }
  getById(id: string) {
    return this.notes.find((note) => note.id === id);
  }
  create(noteDto: CreateNoteDto) {
    const note = {
      id: Math.random().toString(),
      ...noteDto,
    };
    this.notes.push(note);
    return note;
  }
  update(id: string, noteDto: UpdateNoteDto) {
    const note = {
      ...this.getById(id),
      ...noteDto,
    };

    this.notes = this.notes.map((note) => (note.id === id ? note : note));
    return note;
  }
}
