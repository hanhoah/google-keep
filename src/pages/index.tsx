import Note from "../shared/types/Note";
import AddNoteForm from "../components/note/AddNoteForm";
import { useEffect, useState } from "react";
import NoteList from "../components/notelist/NoteList";
import SearchForm from "../components/search/SearchForm";
import AddCategory from "../components/categories/AddCategory";

const getNotesFromDb = async (): Promise<Note[]> => {
  const uri = "http://localhost:3001/notes";
  const res = await fetch(uri);
  const notes = await res.json();
  return notes;
};

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  const resetNotes = () => {
    getNotesFromDb().then((initialNotes) => {
      setNotes(initialNotes);
    });
  };

  useEffect(() => {
    console.log("Only running on mount");
    resetNotes();
  }, []);

  useEffect(() => {
    console.log("running on notes change");
  }, [notes]);

  function addNote(note: Note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  if (!notes) {
    return <p>loading...</p>;
  }
  return (
    <>
      <SearchForm setNotes={setNotes} resetNotes={resetNotes} />
      <AddNoteForm addNote={addNote} />
      <AddCategory />
      <NoteList notes={notes} setNotes={setNotes} />
    </>
  );
}
