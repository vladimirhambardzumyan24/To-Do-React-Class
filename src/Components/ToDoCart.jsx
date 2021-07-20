
export default function ToDoCart({
  items,
  handleDelete,
  onChange,
  onDoubleClick,
  onChangeToDo,
  onClickHide,
}) {
  return items.map((item) => (
    <div key={item.id} className="itemTodo">
      <input
        className="checkbox"
        type="checkbox"
        checked={item.isChecked}
        onChange={(e) => {
          onChange({
            ...item,
            isChecked: e.target.checked,
          });
        }}
      />
      <input
        className={item.removeText+" changeInput"}
        type="text"
        defaultValue={item.textValue}
        onChange={(e) => {
          onChangeToDo({ ...item, textValue: e.target.value });
        }}
      />
      <button
        className={item.removeText+" changBtn"}
        onClick={() => {
          onClickHide(item);
        }}
      >
        Change
      </button>
      <span
      className={item.inpText}
        onDoubleClick={() => {
          onDoubleClick(item);
        }}
      >
        {item.textValue}
      </span>
      <button
        className="deleteItem"
        onClick={() => {
          handleDelete(item);
        }}
      >
        X
      </button>
    </div>
  ));
}
