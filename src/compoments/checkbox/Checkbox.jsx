function Checkbox({ todoItem, handleChangeCheckBox }) {
  function handleChangeCheckBoxEvent(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleChangeCheckBox(updatedTodoItem);
  }

  return (
    <div>
      <input
        id={todoItem.id}
        type="checkbox"
        checked={todoItem.done}
        onChange={handleChangeCheckBox}
      />
      <label for={todoItem.id}>{todoItem.content}</label>
    </div>
  );
}

export default Checkbox;
