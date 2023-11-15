import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import DoneCounter from "./DoneCounter";

const Todo = () => {
  // const [toDo, setToDo] = useState("");
  const [toDo, setToDo] = useState({ name: "", undone: true });
  const [toDos, setToDos] = useState([]);
  let sortedTodos = toDos
    .slice()
    .sort((a, b) => Number(b.undone) - Number(a.undone));
  return (
    <>
      <form className=" flex items-center justify-center">
        <div className=" flex items-center border-2 m-2 py-2 px-3 rounded-md border-lightbrown shadow-xl">
          <FontAwesomeIcon
            icon={faGripLines}
            style={{ color: "#7F675B" }}
            className=""
          />
          <input
            placeholder="Add a Task"
            className=" bg-transparent  ml-4 active:appearance-none focus:ring-transparent focus:border-transparent focus:outline-none font-semibold text-slate-800 placeholder:font-semibold placeholder:text-slate-700"
            type="text"
            onChange={(e) => {
              setToDo({ name: e.target.value, undone: true });
            }}
            value={toDo.name}
            id="addTasks"
          />
        </div>

        <button
          className=" ml-2 bg-amber-900 text-teal-50 px-6 py-2 cursor-pointer  rounded font-mono font-bold hover:bg-amber-800 hover:scale-[1.05] transition-all
           active:scale-[.85] shadow-md
          "
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
      <div className=" bg-ashgray w-2/6 mx-auto px-2 py-0.5 my-12 rounded-3xl h-40vh overflow-y-scroll scrollbar-hide shadow-xl">
        {sortedTodos.map((item, index) => (
          <TodoItem
            key={item.name + index}
            item={item}
            toDos={toDos}
            setToDos={setToDos}
            toDo={toDo}
          />
        ))}
      </div>

      <DoneCounter toDos={toDos} setToDos={setToDos} toDo={toDo} />
    </>
  );
};

export default Todo;
