import React from "react";
import { noteAPI } from "../../api/jsonserver";
import Note from "../../shared/types/Note";
import NoteItem from "../note/NoteItem";

interface Props {
    notes: Note[];
  }

function updateNote(note: Note) {
    console.log("updating note", note);
    //patchData(note);
    noteAPI("PATCH", `notes/${note.id}`, note);
  }

  function deleteNote(note: Note) {
    const result = notes.filter((current) => {
      return current.id !== note.id;
    });
    
    const renderNotes = () => {
      {
        return props.notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
        ));
      }
    };

    if (!notes) {
        return <p>loading...</p>;
      }
function NoteList(props: Props) {
  return <div>NoteList</div>;
}

export default NoteList;