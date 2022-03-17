import NoteItem from "../components/note/NoteItem";
import Note from "../shared/types/Note";
//import initialNotes from "../shared/notes";
import AddNoteForm from "../components/note/AddNoteForm";
import { useEffect, useState } from "react";
import { noteAPI } from "../api/jsonserver";

const getNotesFromDb = async (): Promise<Note[]> => {
  const uri = "http://localhost:3001/notes";
  const res = await fetch(uri);
  const notes = await res.json();
  return notes;
};

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    console.log("Only running on mount");
    getNotesFromDb().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  useEffect(() => {
    console.log("running on notes change");
  }, [notes]);

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

  const renderNotes = () => {
    {
      return notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ));
    }
  };
  //console.log("notes: ", notes);

  // general note list komponente
  // results_note_list komponente
  // z51 bis 62 in neue

  if (!notes) {
    return <p>loading...</p>;
  }
  return (
    <>
      <AddNoteForm addNote={addNote} renderNotes={renderNotes} />
      {renderNotes()}
    </>
  );
}
