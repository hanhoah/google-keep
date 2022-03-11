import NoteItem from "../components/note/NoteItem";
import styles from "../styles/Home.module.css";
import { notes } from "../shared/notes";
import AddNoteForm from "../components/note/AddNoteForm";

console.log(notes);

export default function Home() {
  return (
    <>
      <AddNoteForm />
      {notes.map((note) => (
        <NoteItem key={note.key} note={note} />
      ))}
    </>
  );
}
