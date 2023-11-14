import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <h1 className=" w-2/5 bg-stone-700 mx-auto mb-20 py-6 rounded-2xl text-xl text-slate-100 font-bold">
        Website Todo
      </h1>
      <Todo />
    </>
  );
}

export default App;
