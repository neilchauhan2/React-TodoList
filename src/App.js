import React, { Component } from "react";
import Todos from "./Components/Todos";
import Header from "./Components/Layouts/Header";
import AddTodo from "./Components/AddTodo";
import uuid from "uuid";
import "./App.css";
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "item 1",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "item 2",
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // add todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title, //since key and value are same no need to do title : title, we are in ES6!!
      completed: false
    };
    this.setState({ todos: [...this.state.todos.concat(newTodo)] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
