import React, { ChangeEvent } from "react";
import styles from "./Header.module.css";
import { Input } from "antd";
import { noteAPI, noteSearch } from "../api/jsonserver";
import SearchResult from "./SearchResult";
const { Search } = Input;

function Header() {
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const term = e.target.value;

    if (term.length > 2) {
      noteSearch(term).then((results) => {
        console.log("noteSearch");
      });
    } else {
      console.log("else");
    }
    //noteAPI("POST");
  };

  return (
    <header className={styles.header}>
      <div className={styles.h1}>Google Keep</div>
      <Search
        placeholder="Notizen durchsuchen"
        onChange={onSearch}
        enterButton
        style={{ width: 400, position: "absolute", right: 50, top: 30 }}
      />
    </header>
  );
}

export default Header;
