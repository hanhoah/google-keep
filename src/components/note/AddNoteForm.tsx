import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

function AddNoteForm() {
  return (
    <>
      <Input showCount maxLength={20} onChange={onChange} />
      <br />
      <br />
      <TextArea showCount maxLength={100} onChange={onChange} />
    </>
  );
}

export default AddNoteForm;
