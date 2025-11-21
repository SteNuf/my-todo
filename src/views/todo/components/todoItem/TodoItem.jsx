import Button from "../../../../compoments/button/Button";
import Checkbox from "../../../../compoments/checkbox/Checkbox";

function TodoItem({ todoItem, handleChangeCheckBox }) {
  return (
    <div>
      <Checkbox
        todoItem={todoItem}
        handleChangeCheckBox={handleChangeCheckBox}
      />
      <Button></Button>
    </div>
  );
}

export default TodoItem;
