import TodoItem from "../todoItem/TodoItem";

function ToDoBody({ todos, handleChangeCheckBox, deleteTodoItemFromList }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          handleChangeCheckBox={handleChangeCheckBox}
          deleteTodoItemFromList={deleteTodoItemFromList}
        />
      ))}
    </div>
  );
}

export default ToDoBody;
