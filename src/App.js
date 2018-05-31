import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import TodoInput from './components/todoinput';
import TodoItem from './components/todoitem';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "Make dinner"},
        {id: 1, text: "Go to bed"},
        {id: 2, text: "Learn to make a React App"}
      ],
    }
    
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice(); 
    todos.push({id: this.state.todos.length +1, text: todoText});
    this.setState({
      todos: todos,
    })
  }

  removeTodo(id) { 
    this.setState({
      todos: this.state.todos.filter(((todo , index) => todo.id !== id))
    })
  }

  render() {
    return (
      <div className="App">
         <div className="todo-wrapper">
            <Header />
            <TodoInput todoText="" addTodo={this.addTodo}/>
            <ul>
              {
                this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              }
              )}
            </ul>
         </div>   
      </div>
    );
  }
} 
