import React from "react";
import { Button } from "antd";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Copyright 2022 <Button type="dashed">the BLA Company</Button>
    </footer>
  );
}

export default Footer;
