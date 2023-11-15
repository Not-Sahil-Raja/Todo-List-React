import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faCheck,
  faSquare,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

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
  let icon;
  item.undone
    ? (icon = <FontAwesomeIcon icon={faCircleNotch} />)
    : (icon = <FontAwesomeIcon icon={faCheck} />);

  return (
    <>
      <div
        className={` flex items-center justify-around m-8 border-soild w-3/4 mx-auto px-3 py-3 rounded shadow-xl bg-ashgraylight border-solid border-2 font-semibold ${
          item.undone ? "" : "opacity-[.55]"
        } `}
      >
        <p onClick={() => taskComplete(item.name)} className=" cursor-pointer">
          {icon}
        </p>
        <p
          className={`cursor-pointer ${
            item.undone ? " no-underline" : " line-through"
          } `}
          onClick={() => taskComplete(item.name)}
        >
          {item.name}
        </p>{" "}
        <button
          className=" bg-red-500 text-white py-1 px-4 rounded-3xl font-bold hover:bg-red-700 transition-all active:scale-[.8]"
          onClick={() => deleteItem(item)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </>
  );
};

export default TodoItem;
