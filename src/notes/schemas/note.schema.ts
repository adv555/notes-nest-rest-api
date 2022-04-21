import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  content: string;

  @Prop()
  archived: boolean;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
