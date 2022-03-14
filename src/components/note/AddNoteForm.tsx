import React, { useState } from "react";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;
import styles from "./AddNoteForm.module.css";
import Note from "../../shared/types/Note";
import { v4 as uuidv4 } from "uuid";

interface Props {
  addNote: (note: Note) => void;
}

function AddNoteForm(props: Props) {
  const emptyNote = {
    key: "",
    title: "",
    content: "",
  };

  const [note, setNote] = useState(emptyNote);

  const onChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNote({ ...note, key: uuidv4() });
    props.addNote(note);
    // setNote(emptyNote); cannot setNote to empty note because async
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      Add new note
      <Input
        value={note.title}
        name="title"
        placeholder="Title"
        showCount
        maxLength={20}
        onChange={onChange}
      />
      <br />
      <br />
      <TextArea
        value={note.content}
        name="content"
        placeholder="Content"
        showCount
        maxLength={100}
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
