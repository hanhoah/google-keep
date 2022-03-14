import NoteItem from "../components/note/NoteItem";
import Note from "../shared/types/Note";
import initialNotes from "../shared/notes";
import AddNoteForm from "../components/note/AddNoteForm";
import { useState } from "react";

console.log(initialNotes);

export default function Home() {
  const [notes, setNotes] = useState(initialNotes);

  function addNote(note: Note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  function deleteNote(note: Note) {
    console.log("deleting note ", note);
  }

  return (
    <>
      <AddNoteForm addNote={addNote} />
      {notes.map((note) => (
        <NoteItem key={note.key} note={note} deleteNote={deleteNote} />
      ))}
    </>
  );
}
