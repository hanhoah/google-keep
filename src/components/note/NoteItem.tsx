import styles from "./NoteItem.module.css";
import Note from "../../shared/types/Note";
import { Modal, Button } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;

interface Props {
  note: Note;
  deleteNote: (note: Note) => void;
  updateNote: (note: Note) => void;
}

function NoteItem(props: Props) {
  const onDeleteNote = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    props.deleteNote(props.note);
  };

  //begin edit note modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log("showing modal");
    setIsModalVisible(true);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    console.log("cancel modal");
    setIsModalVisible(false);
  };
  // end edit note modal

  const [note, setNote] = useState(props.note);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.updateNote(note);
    setIsModalVisible(false);
  };

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

  return (
    <div onClick={showModal} className={styles.note}>
      <h1>{note.title}</h1>
      <p>{note.content?.slice(0, 80)}</p>
      <Modal
        title="Edit Note"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={onSubmit} className={styles.form}>
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
            rows={5}
            value={note.content}
            name="content"
            placeholder="Content"
            showCount
            maxLength={1024}
            onChange={onChange}
          />
          <button type="submit" className={styles.button}>
            {" "}
            <CheckOutlined />{" "}
          </button>
        </form>{" "}
      </Modal>
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
