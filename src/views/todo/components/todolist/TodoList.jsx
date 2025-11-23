import { useState } from "react";
import ToDoBody from "../todobody/TodoBody";
import TodoHeader from "../todoheader/TodoHeader";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: Math.random(), content: "", done: true },
  ]);

  function handleChangeCheckBox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];

    updatedTodos.splice(todoItemIndex, 1, todoItem);

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
