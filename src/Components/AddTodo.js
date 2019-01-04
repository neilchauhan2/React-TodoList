import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      /*
         same as e.target.title : e.target.value 
         if the name of the attribute in the field and in the state is same we can use the first method and it will work for all the fields and we don't need to create separate onChange functions for various fields
         for eg in this case the input field has name as 'title' and we trying to update the value of the state element title so we got the same name
         */
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    // once the submission is made we clear the title field
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
