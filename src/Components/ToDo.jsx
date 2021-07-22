import React from "react";
import FormToDo from "./FormToDo";
import ToDoCart from "./ToDoCart";
import ToDoClear from "./ToDoClear";
import ToDoSave from "../helper/LocalStorage";
import { getToDo } from "../helper/LocalStorage";
import Button from "./Button";

const idGenerator = () => {
  let id = 0;
  return () => {
    id += 1 + Math.random();
    return id;
  };
};

const getRandomId = idGenerator();

const FilterStatuses = {
  completed: "COMPLETED",
  all: "ALL",
  active: "ACTIVE",
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCheck: false,
      textInput: "",
      items: getToDo() === null ? [] : getToDo(),
      filterStatus: FilterStatuses.all,
    };
  }
  handleGiv = (event) => {
    this.setState({ textInput: event.target.value });
  };

  handleAdd = (event) => {
    event.preventDefault();
    if (this.state.textInput !== "") {
      this.setState((pastState) => {
        return {
          items: [
            ...pastState.items,
            {
              id: getRandomId(),
              removeText: "hideRemove",
              textValue: pastState.textInput,
              inpText: "inpTextShow",
              isChecked: false,
            },
          ],
        };
      });
    }
    this.setState({ textInput: "" });
  };
  componentDidUpdate() {
    ToDoSave(this.state.items);
  }

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
    this.setState((pastState) => ({
      items: pastState.items.filter((item) => !item.isChecked),
    }));
  };

  handelCheckedAll = () => {
    this.setState((pastState) => ({
      allCheck: true,
      items: pastState.items.map((item) => {
        return {
          id: item.id,
          removeText: "hideRemove",
          textValue: item.textValue,
          inpText: "inpTextShow",
          isChecked: true,
        };
      }),
    }));
  };

  handelCheckedAllTrue = () => {
    this.setState((pastState) => ({
      allCheck: false,
      items: pastState.items.map((item) => {
        return {
          id: item.id,
          removeText: "hideRemove",
          textValue: item.textValue,
          inpText: "inpTextShow",
          isChecked: false,
        };
      }),
    }));
  };

  handleShowRemove = (item) => {
    this.setState((pastState) => ({
      items: pastState.items.map((elm) => {
        if (elm.id === item.id) {
          return {
            id: elm.id,
            removeText: "showRemove",
            textValue: item.textValue,
            inpText: "inpTextHidden",
            isChecked: false,
          };
        }
        return elm;
      }),
    }));
  };

  onChangeToDo = (newToDo) => {
    this.setState((pastState) => ({
      items: pastState.items.map((elm) => {
        if (elm.id === newToDo.id) {
          return {
            id: newToDo.id,
            removeText: "showRemove",
            textValue: newToDo.textValue,
            inpText: "inpTextHidden",
            isChecked: false,
          };
        }
        return elm;
      }),
    }));
  };

  onClickHide = (item) => {
    this.setState((pastState) => ({
      items: pastState.items.map((elm) => {
        if (elm.id === item.id) {
          return {
            id: elm.id,
            removeText: "hideRemove",
            textValue: item.textValue,
            inpText: "inpTextShow",
            isChecked: false,
          };
        }
        return elm;
      }),
    }));
  };

  selectFilter = (filterStatus) => () => {
    this.setState({
      filterStatus,
    });
  };
  render() {
    const { filterStatus, items } = this.state;

    const filteredTodos =
      filterStatus === FilterStatuses.all
        ? items
        : filterStatus === FilterStatuses.active
        ? items.filter((t) => !t.isChecked)
        : items.filter((t) => t.isChecked);

    return (
      <div className="container">
        <span className="todo">To Do</span>
        <FormToDo
          onSubmit={this.handleAdd}
          value={this.state.textInput}
          onChange={this.handleGiv}
        />
        <ToDoCart
          items={filteredTodos}
          handleDelete={this.handleDelete}
          onChange={this.handleDelChecked}
          onDoubleClick={this.handleShowRemove}
          onChangeToDo={this.onChangeToDo}
          onClickHide={this.onClickHide}
        />
        <ToDoClear
          items={this.state.items}
          onCheckedClear={this.handleCheckedClear}
          handelCheckedAll={
            !this.state.allCheck
              ? this.handelCheckedAll
              : this.handelCheckedAllTrue
          }
        />
        <div className="checkCompleted">
          {Object.entries(FilterStatuses).map(([, value]) => (
            <Button
              onClick={this.selectFilter(value)}
              text={value}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ToDo;
