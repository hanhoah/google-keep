import React, { SetStateAction, useState } from "react";
import { noteAPI } from "../../api/jsonserver";
import Note from "../../shared/types/Note";
import NoteItem from "../note/NoteItem";

interface Props {
  notes: Note[];
  setNotes: (value: SetStateAction<Note[]>) => void;
}

function NoteList(props: Props) {
  const notes = props.notes;

  function updateNote(note: Note) {
    console.log("updating note", note);
    //patchData(note);
    noteAPI("PATCH", `notes/${note.id}`, note);
  }

  function deleteNote(note: Note) {
    const result = notes.filter((current) => {
      return current.id !== note.id;
    });
    props.setNotes(result);
    noteAPI("DELETE", `notes/${note.id}`, note);
  }

  return (
    <>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </>
  );
}

export default NoteList;
