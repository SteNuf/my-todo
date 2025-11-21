import { useState } from "react";
import TodoItem from "./todoItem/TodoItem";

function ToDo() {
  const [todos, setTodos] = useState([
    { id: Math.random(), content: "Wäsche waschen", done: true },
  ]);

  function handleChangeCheckBox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    console.log(todoItemIndex);
    const updatedTodos = [...todos];
    console.log(updatedTodos);
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todoItem={todo} handleChangeCheckBox={handleChangeCheckBox} />
      ))}
    </div>
  );
}

export default ToDo;
