import React from "react";
import { AiFillDelete, AiFillSave, AiFillEdit } from "react-icons/ai";

const Note = ({ note, onDelete, onSave, index }) => {
  const [edit, setEdit] = React.useState(false);
  const [editedNote, setEditedNote] = React.useState(note);
  return (
    <div className="note">
      {edit ? (
        <input
          value={editedNote}
          onChange={(event) => {
            setEditedNote(event.target.value);
          }}
        />
      ) : (
        <p>{note}</p>
      )}
      <div className="button-group">
        {edit ? (
          <button
            className="button-blue"
            onClick={() => {
              if (editedNote.length === 0) {
                onDelete(index);
              } else {
                onSave(editedNote, index);
                setEdit(!edit);
              }
            }}
          >
            <AiFillSave />
          </button>
        ) : (
          <button onClick={() => setEdit(!edit)}>
            <AiFillEdit />
          </button>
        )}
        <button
          onClick={() => {
            onDelete(index);
          }}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Note;
