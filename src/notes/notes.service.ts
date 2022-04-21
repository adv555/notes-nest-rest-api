import { UpdateNoteDto } from './dto/update-note.dto';
import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './schemas/note.schema';
import { Model } from 'mongoose';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  private notes = [];

  async getAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }
  async getById(id: string): Promise<Note> {
    return this.noteModel.findById(id).exec();
  }
  async create(noteDto: CreateNoteDto): Promise<Note> {
    const newNote = new this.noteModel(noteDto);
    return newNote.save();
  }

  async delete(id: string): Promise<Note> {
    return this.noteModel.findByIdAndRemove(id).exec();
  }
  async update(id: string, noteDto: UpdateNoteDto): Promise<Note> {
    return this.noteModel.findByIdAndUpdate(id, noteDto, { new: true }).exec();
  }
}
