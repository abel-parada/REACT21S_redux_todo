import React from "react";

import { notes } from "../../notes";
import classes from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {notes.map((note) => {
        return (
          <div className={classes.todo} key={note.id}>
            <h2>
              {note.id}. {note.title}
            </h2>
            <p>{note.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
