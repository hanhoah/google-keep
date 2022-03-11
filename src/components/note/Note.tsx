import styles from "./Note.module.css";

function Note() {
  return (
    <div className={styles.note}>
      <h1>Note title</h1>
      <p>Some Text</p>
    </div>
  );
}

export default Note;
