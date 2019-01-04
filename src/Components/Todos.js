import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const todoComponent = this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
    return <div className="todos">{todoComponent}</div>;
  }
}

// This just means props are required
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
