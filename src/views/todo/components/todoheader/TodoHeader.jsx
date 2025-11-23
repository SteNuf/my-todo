import { useState } from "react";
import Button from "../../../../compoments/button/Button";
import Input from "../../../../compoments/input/Input";
import "./TodoHeader.css";

function TodoHeader({ addTodoItemToList }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChangeEvent(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }
  function handleAddTodoItemEvent() {
    addTodoItemToList({ id: Math.random(), content: inputValue, done: false });
    setInputValue("");
  }

  return (
    <div class="todo-header">
      <Input
        inputValue={inputValue}
        handleInputChangeEvent={handleInputChangeEvent}
      />
      <Button
        buttonValue={"Add"}
        handleButtonClickEvent={handleAddTodoItemEvent}
      />
    </div>
  );
}

export default TodoHeader;
