import Button from "../../../../compoments/button/Button";
import Checkbox from "../../../../compoments/checkbox/Checkbox";

function TodoItem({ todoItem, handleChangeCheckBox, deleteTodoItemFromList }) {
  function handleDeleteTodoItem() {
    deleteTodoItemFromList(todoItem.id);
  }

  function handleChangeCheckBoxEvent(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleChangeCheckBox(updatedTodoItem);
  }

  return (
    <div>
      <Checkbox
        id={todoItem.id}
        checked={todoItem.done}
        content={todoItem.content}
        handleChangeCheckBox={handleChangeCheckBoxEvent}
      />
      <Button
        buttonValue={"Löschen"}
        handleButtonClickEvent={handleDeleteTodoItem}
      />
    </div>
  );
}

export default TodoItem;
