import styles from "./NoteItem.module.css";
import Note from "../../shared/types/Note";
import { Modal, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;

interface Props {
  note: Note;
  deleteNote: (note: Note) => void;
}

function NoteItem(props: Props) {
  const onDeleteNote = () => {
    props.deleteNote(props.note);
  };

  //begin edit note modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log("showing modal");
    setIsModalVisible(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModalVisible(false);
    console.log("ok modal");
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    console.log("cancel modal");
    setIsModalVisible(false);
  };
  // end edit note modal

  const note = props.note;
  return (
    <div onClick={showModal} className={styles.note}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <Modal
        title="Edit Note"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className={styles.form}>
          <Input
            value={note.title}
            name="title"
            placeholder="Title"
            showCount
            maxLength={20}
          />
          <br />
          <br />
          <TextArea
            value={note.content}
            name="content"
            placeholder="Content"
            showCount
            maxLength={100}
          />
          <button className={styles.button}>
            {" "}
            <PlusOutlined />{" "}
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
