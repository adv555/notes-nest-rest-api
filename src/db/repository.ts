import * as fs from 'fs';
import * as path from 'path';
import { Note } from 'src/notes/notes.service';
const Path = path.resolve('src/db/db.json');

let notes = JSON.parse(fs.readFileSync(Path, 'utf8'));

export const notesRepository = {
  getAll: () => notes,
  getById: (id) => notes.find((note) => note.id === id),
  create,
  update,
  deleteById,
};

function create(note: Note) {
  notes.push(note);
  save();
}

function update(id: string, note: Note) {
  const index = notes.findIndex((note) => note.id === id);
  notes[index] = note;
  save();
}

function deleteById(id: string) {
  notes = notes.filter((note) => note.id !== id);
  save();
}

function save() {
  fs.writeFileSync(Path, JSON.stringify(notes, null, 2));
}
