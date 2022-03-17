import React, { ChangeEvent } from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.h1}>Google Keep</div>
    </header>
  );
}

export default Header;
