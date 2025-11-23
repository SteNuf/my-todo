import { useState } from "react";
import ToDoBody from "../todobody/TodoBody";
import TodoHeader from "../todoheader/TodoHeader";
import "./TodoList.css";

function TodoList({}) {
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

  function addTodoItemToList(todoItem) {
    const updatedTodos = [...todos];
    updatedTodos.push(todoItem);
    setTodos(updatedTodos);
  }

  function deleteTodoItemFromList(todoId) {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }

  return (
    <div class="todo-list">
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <ToDoBody
        todos={todos}
        handleChangeCheckBox={handleChangeCheckBox}
        deleteTodoItemFromList={deleteTodoItemFromList}
      />
    </div>
  );
}

export default TodoList;
