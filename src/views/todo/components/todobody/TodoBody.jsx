import TodoItem from "../todoItem/TodoItem";
import "./TodoBody.css";

function ToDoBody({ todos, handleChangeCheckBox, deleteTodoItemFromList }) {
  function showNoToDoItems() {
    if (todos.length === 0) {
      return <span>Keine Todo's </span>;
    }
  }

  return (
    <div class="todo-body">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          handleChangeCheckBox={handleChangeCheckBox}
          deleteTodoItemFromList={deleteTodoItemFromList}
        />
      ))}
      {showNoToDoItems()}
    </div>
  );
}

export default ToDoBody;
