import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, deleteTodo, toggleComplete, startEditing, editTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          startEditing={startEditing}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;