function Checkbox({ id, checked, content, handleChangeCheckBox }) {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChangeCheckBox}
      />
      <label htmlFor={id}>{content}</label>
    </div>
  );
}

export default Checkbox;
