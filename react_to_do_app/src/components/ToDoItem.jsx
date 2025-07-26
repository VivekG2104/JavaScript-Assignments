import { useState } from "react";

const ToDoItem = ({ todo, deleteTodo, toggleComplete, startEditing, editTodo }) => {
  const [editText, setEditText] = useState(todo.text);

  return (
    <li className="flex items-center gap-2 bg-white p-2 rounded shadow">
      {todo.editing ? (
        <>
          <input
            className="border rounded px-2 py-1 flex-grow"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-2 py-1 rounded"
            onClick={() => editTodo(todo.id, editText)}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className={`flex-grow \${todo.completed ? "line-through text-gray-500" : ""}`}>
            {todo.text}
          </span>
          <button
            className="bg-yellow-500 text-white px-2 py-1 rounded"
            onClick={() => startEditing(todo.id)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;