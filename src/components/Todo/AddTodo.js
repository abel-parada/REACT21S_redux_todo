import React from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";

const AddTodo = ({ addHandler }) => {
  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>
      <div>
        <label>Task</label>
        <input type="text" />
      </div>
      <Button>Add Task</Button>
    </form>
  );
};

export default AddTodo;
