import { useState } from "react";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;
import styles from "./AddNoteForm.module.css";
import Note from "../../shared/types/Note";
import { noteAPI } from "../../api/jsonserver";

interface Props {
  addNote: (note: Note) => void;
  renderNotes: () => JSX.Element[];
}

function AddNoteForm(props: Props) {
  const emptyNote = {
    id: "",
    title: "",
    content: "",
  };

  const [note, setNote] = useState(emptyNote);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNote(emptyNote);
    //postData(note);
    noteAPI<Note>("POST", "notes", note).then((newnote) => {
      props.addNote(newnote);
    });
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      Add new note
      <Input
        value={note.title}
        name="title"
        placeholder="Title"
        showCount
        maxLength={64}
        onChange={onChange}
      />
      <br />
      <br />
      <TextArea
        value={note.content}
        name="content"
        placeholder="Content"
        showCount
        maxLength={1024}
        onChange={onChange}
      />
      <button className={styles.button}>
        {" "}
        <PlusOutlined />{" "}
      </button>
    </form>
  );
}

export default AddNoteForm;
