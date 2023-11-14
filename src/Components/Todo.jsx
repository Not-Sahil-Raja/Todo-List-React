import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  // const [toDo, setToDo] = useState("");
  const [toDo, setToDo] = useState({ name: "", undone: true });
  const [toDos, setToDos] = useState([]);
  return (
    <>
      <form>
        <input
          placeholder="Add a Task"
          className=" border-b-2 border-gray-900 px-4 py-2 w-6/12 rounded mr-10"
          type="text"
          onChange={(e) => {
            setToDo({ name: e.target.value, undone: true });
          }}
          value={toDo.name}
        />
        <button
          className=" bg-lime-800 text-teal-50 px-6 py-2  rounded font-mono font-bold"
          disabled={!toDo.name}
          onClick={(e) => {
            e.preventDefault();
            setToDos([...toDos, toDo]);
            setToDo({ name: "", undone: true });
          }}
        >
          New Task +
        </button>
      </form>
      <div>
        {toDos.map((item) => (
          <TodoItem
            key={item.name}
            item={item}
            toDos={toDos}
            setToDos={setToDos}
            toDo={toDo}
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
