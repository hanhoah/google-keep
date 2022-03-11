import styles from "./NoteItem.module.css";
import Note from "../../shared/types/Note";

interface Props {
  note: Note;
}

function NoteItem(props: Props) {
  return (
    <div className={styles.note}>
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
    </div>
  );
}

export default NoteItem;
