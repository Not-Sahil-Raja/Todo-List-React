import React from "react";
import { useState } from "react";

const DoneCounter = ({ toDos, setToDos, toDo }) => {
  let completedTask = toDos.filter((todo) => !todo.undone).length;
  let taskRemaing = toDos.filter((todo) => todo.undone).length;
  return (
    <>
      <div className=" absolute top-2/3 bg-lightbrown px-4 py-4 text-lg rounded-md shadow-md text-slate-50 font-semibold">
        <h4>
          Task Remaining : <span>{taskRemaing}</span>
        </h4>

        <h4>
          Task Completed : <span>{completedTask}</span>
        </h4>
      </div>
    </>
  );
};

export default DoneCounter;
