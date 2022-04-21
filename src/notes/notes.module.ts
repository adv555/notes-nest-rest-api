import { MongooseModule } from '@nestjs/mongoose';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Module } from '@nestjs/common';
import { Note, NoteSchema } from './schemas/note.schema';

@Module({
  providers: [NotesService],
  controllers: [NotesController],
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
})
export class NotesModule {}
