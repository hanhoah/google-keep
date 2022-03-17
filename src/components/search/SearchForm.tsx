import React, { ChangeEvent, SetStateAction } from "react";
import { Input } from "antd";
import { noteSearch } from "../../api/jsonserver";
import Note from "../../shared/types/Note";

const { Search } = Input;

interface Props {
  setNotes: (value: SetStateAction<Note[]>) => void;
  resetNotes: () => void;
}

function SearchForm(props: Props) {
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const term = e.target.value;
    if (term.length > 2) {
      noteSearch(term).then((results) => {
        props.setNotes(results);
      });
    } else {
      props.resetNotes();
    }
  };
  return (
    <div>
      {" "}
      <Search
        placeholder="Notizen durchsuchen"
        onChange={onSearch}
        enterButton
        style={{ width: 400, position: "absolute", right: 50, top: 30 }}
      />
    </div>
  );
}

export default SearchForm;
