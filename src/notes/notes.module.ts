import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [NotesService],
  controllers: [NotesController],
})
export class NotesModule {}
