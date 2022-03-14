import styles from "./NoteItem.module.css";
import Note from "../../shared/types/Note";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface Props {
  note: Note;
  deleteNote: (note: Note) => void;
}

function NoteItem(props: Props) {
  const onDeleteNote = () => {
    props.deleteNote(props.note);
  };

  return (
    <div className={styles.note}>
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <Button
        onClick={onDeleteNote}
        type="primary"
        shape="circle"
        icon={<DeleteOutlined />}
        size="small"
      />
    </div>
  );
}

export default NoteItem;
