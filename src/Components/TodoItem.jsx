import React from "react";

const TodoItem = ({ item, toDos, setToDos, toDo }) => {
  let deleteItem = (item) => {
    setToDos(toDos.filter((todo) => todo !== item));
  };

  let taskComplete = (name) => {
    let newList = toDos.map((todo) =>
      todo.name === name ? { ...todo, undone: !todo.undone } : todo
    );

    setToDos(newList);
  };

  return (
    <>
      <div className=" flex items-center justify-around m-8 border-soild border-yellow-200 border-2 w-4/12 mx-auto px-3 py-3 rounded">
        <p
          className={`cursor-pointer ${
            item.undone ? " no-underline" : " line-through"
          } `}
          onClick={() => taskComplete(item.name)}
        >
          {item.name}
        </p>{" "}
        <button
          className=" bg-red-500 text-white py-1 px-4 rounded-3xl font-bold"
          onClick={() => deleteItem(item)}
        >
          X
        </button>
      </div>
    </>
  );
};

export default TodoItem;
