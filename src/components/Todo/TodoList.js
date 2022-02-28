import React from "react";

import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from "react";

import * as actionTypes from '../store/actions';

// import { notes } from "../../notes";

import classes from "./TodoList.module.css";

const TodoList = () => {

const notes = useSelector(state => state.notes);
// const abelUnderstandThis = useSelector(state => state.understand);
const dispatch = useDispatch();

const [filteredValue, setFilteredValue] = useState();
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const removeHandler = (id) => {
    console.log(id, "was clicked");
    dispatch({
      type: actionTypes.REMOVE_TODO,
      payload:id
    })
  };
  const doneHandler = (id) => {
    console.log(id, "was clicked");
    dispatch({
      type: actionTypes.DONE_TODO,
      payload:id
    })
  };

  const filterHandler = (event) => {
    setFilteredValue(event.target.value);
  };

  useEffect(() => {
    if (filteredValue === "done") {
      setFilteredNotes(notes.filter((item) => item.done === !!filteredValue));
    } else if (filteredValue === "not-done") {
      setFilteredNotes(notes.filter((item) => item.done !== !!filteredValue));
    } else {
      setFilteredNotes(notes);
    }
  }, [filteredValue, notes]);

  return (
    <div className={classes.todos}>
      <select name="done" defaultValue="all" onChange={filterHandler}> 
        <option value="done">DONE</option>
        <option value="Not done">Not done</option>
        <option value="all">All</option>
      </select>
      <h1>Notes:</h1>
      {filteredNotes.map((note) => {
        return (
          <div
            onClick={() => doneHandler(note.id)}
            className={`${classes.todo} ${
              note.done ? classes.done : classes.notDone
            }`}
            key={note.id}
          >
            <h2>
             {note.title}
            </h2>
            <p>{note.task}</p>
            <span
              onClick={() => removeHandler(note.id)}
              className={`material-icons ${classes.delete}`}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
