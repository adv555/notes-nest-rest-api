export class CreateNoteDto {
  readonly name: string;
  readonly category: string;
  readonly content: string;
  readonly archived: boolean;
}
