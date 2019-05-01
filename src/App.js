import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take Out The Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Wash Your Cat',
        completed: false
      },
      {
        id: 3,
        title: 'Learn To Run Really Fast',
        completed: false
      }
    ]
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
