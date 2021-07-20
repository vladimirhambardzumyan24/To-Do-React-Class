export default function ToDoSave(items) {
  localStorage.setItem("toDos", JSON.stringify(items));
}

export function getToDo() {
  return JSON.parse(localStorage.getItem("toDos"));
}
