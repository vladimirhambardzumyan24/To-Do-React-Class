import React from "react";
import ToDoCart from "./ToDoCart";
import ToDoClear from "./ToDoClear";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      items: [
        { id: Math.random(), textValue: "Java Script", isChecked: false },
        { id: Math.random(), textValue: "Node JS", isChecked: false },
        { id: Math.random(), textValue: "React", isChecked: false },
        { id: Math.random(), textValue: "Angular", isChecked: false },
        { id: Math.random(), textValue: "Vue JS", isChecked: false },
      ],
    };
  }
  handleGiv = (event) => {
    this.setState({ textInput: event.target.value });
  };

  handleAdd = (event) => {
    event.preventDefault();
    if (this.state.textInput !== "") {
      this.setState((pastState) => ({
        items: [
          ...pastState.items,
          {
            id: Math.random(),
            textValue: pastState.textInput,
            isChecked: false,
          },
        ],
      }));
    }
  };

  handleDelete = (item) => {
    this.setState((pastState) => ({
      items: pastState.items.filter((e) => e.id !== item.id),
    }));
  };

  handleDelChecked = (newTodo) => {
    this.setState((pastState) => ({
      items: pastState.items.map((item) => {
        if (item.id === newTodo.id) {
          return newTodo;
        }
        return item;
      }),
    }));
  };

  handleCheckedClear = () => {
    this.setState(
      (pastState) =>
        (pastState.items = pastState.items.filter((item) => !item.isChecked))
    );
  };
  render() {
    return (
      <div className="container">
        <span className="todo">To Do</span>
        <form onSubmit={this.handleAdd}>
          <input
            className="input"
            type="text"
            value={this.state.textInput}
            onChange={this.handleGiv}
          />
          <input className="add" type="submit" value="ADD" />
        </form>
        <ToDoCart
          items={this.state.items}
          handleDelete={this.handleDelete}
          onChange={this.handleDelChecked}
        />
        <ToDoClear
          items={this.state.items}
          onCheckedClear={this.handleCheckedClear}
        />
      </div>
    );
  }
}

export default ToDo;
