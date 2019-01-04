import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
      padding: "10px",
      fontFamily: "Helvetica"
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(
              this,
              id
            )} /* .bind method with 'this' will send the current element and send its id back to the App.js */
            checked={completed}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            ✖
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0057",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
