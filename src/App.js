import React from "react";
import "./styles/note.scss";

import Note from "./component/Note";

const App = () => {
  const [noteName, setNoteName] = React.useState("");
  const [notes, setNotes] = React.useState(
    []
  );

  const addNoteHandler = () => {
    if (noteName.length !== 0) {
      setNotes([...notes, noteName]);
    } else {
      alert("Please type something!!! ");
    }
    console.log("notes on 14", notes);
    setNoteName("");
  };

  const onDelete = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  const onSave = (note, index) => {
    const newNotes = notes.map((NOTE, i) => {
      if (i === index) {
        return note;
      }
      return NOTE;
    });
    setNotes(newNotes);
    // const newNotes1 = notes;
    // newNotes1[index] = note;
    // console.log("onSave",newNotes1)
    // setNotes(newNotes1);
  };

  console.log("notes->", notes);

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="app">
      <div className="header">
        <input
          value={noteName}
          onChange={(event) => {
            setNoteName(event.target.value);
          }}
        />
        <button onClick={addNoteHandler}>Add Note</button>
      </div>
      <div className="notes">
        {notes?.map((note, index) => {
          return (
            <Note
              note={note}
              onDelete={onDelete}
              onSave={onSave}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
