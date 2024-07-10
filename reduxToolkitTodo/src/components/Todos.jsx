import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo,removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center ">Todos</div>
      <ul className="list-none">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <button
                onClick={() => dispatch(updateTodo({ id: todo.id }))}
                className="text-white bg-orange-300 border-0 py-1 px-4 focus:outline-none hover:bg-orange-600 rounded text-md"
              >
                Update
              </button>
              <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                X
              </button>
            </li>
          ))
        ) : (
          <li className="text-white">No todos available</li>
        )}
      </ul>
    </>
  );
  
}

export default Todos;
