import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false, editing: false }]);
    setTask("");
  };

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText, editing: false } : todo));
  };

  const startEditing = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, editing: true } : { ...todo, editing: false }));
  };

  return (
    <div className="min-h-screen bg-gray-300 p-4">
      <Header />
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border rounded px-2 py-1 flex-grow"
          placeholder="Add new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        startEditing={startEditing}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;