import NoteItem from "../components/note/NoteItem";
import Note from "../shared/types/Note";
//import initialNotes from "../shared/notes";
import AddNoteForm from "../components/note/AddNoteForm";
import { useEffect, useState } from "react";
import { noteAPI } from "../api/jsonserver";

const getInitialNotes = async (): Promise<Note[]> => {
  console.log("getInitialNotes");
  const uri = "http://localhost:3001/notes";
  const res = await fetch(uri);
  const notes = await res.json();
  console.log("notes: ", notes);
  return notes;
};

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    console.log("Only running on mount");
    getInitialNotes().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, [notes]);

  useEffect(() => {
    console.log("Component did update");
  });

  function addNote(note: Note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  function updateNote(note: Note) {
    console.log("updating note", note);
    //patchData(note);
    noteAPI("PATCH", `notes/${note.id}`, note);
  }

  function deleteNote(note: Note) {
    const result = notes.filter((current) => {
      return current.id !== note.id;
    });

    setNotes(result);
    //deleteItem(note);
    noteAPI("DELETE", `notes/${note.id}`, note);
  }

  //console.log("notes: ", notes);

  return (
    <>
      <AddNoteForm addNote={addNote} />
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </>
  );
}
