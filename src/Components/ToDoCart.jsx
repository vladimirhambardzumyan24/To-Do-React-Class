export default function ToDoCart({ items, handleDelete, onChange }) {
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
      {item.textValue}
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
