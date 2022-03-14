import NoteItem from "../components/note/NoteItem";
import Note from "../shared/types/Note";
import initialNotes from "../shared/notes";
import AddNoteForm from "../components/note/AddNoteForm";
import { useState } from "react";

/*
const getInitialNotes = async (): Promise<Note[]> => {
  console.log("getInitialNotes");
  const uri = "http://localhost:3001/notes";
  const res = await fetch(uri);
  const notes = await res.json();
  console.log("notes: ", notes);
  return notes;
};
*/

export default function Home() {
  const [notes, setNotes] = useState(initialNotes);

  /*
  useEffect(() => {
    console.log("Only running on mount");
    const initialNotes = await getInitialNotes();
    setNotes(initialNotes);
  }, []);
*/

  function addNote(note: Note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  function deleteNote(note: Note) {
    //console.log("deleting note ", note);
  }

  //console.log("notes: ", notes);

  return (
    <>
      <AddNoteForm addNote={addNote} />
      {notes.map((note) => (
        <NoteItem key={note.key} note={note} deleteNote={deleteNote} />
      ))}
    </>
  );
}
