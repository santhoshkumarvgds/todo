import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  removeItem(item, i) {
    this.props.removeTodo(item, i);
  }

  render() {
    return (
      <div className="center">
        <ul>
          {this.props.entries.map((todo, i) => {
            
            return (
              <li>
                {todo}
                {""}
                <button
                  onClick={() => {
                    this.removeItem(todo, i);
                  }}
                  key={i}
                >
                  {""}Delete
                  {""}
                </button>
              </li>
              
            );
            
          })}
        </ul>
      </div>
    );
  }
}

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  addTask(event) {
    event.preventDefault();
    var taskArray = this.state.tasks;
    var newTaskInput = this.refs.newTask.value;
    taskArray.push(newTaskInput);
    this.setState({ tasks: taskArray });
    this.refs.newTask.value = "";
  }
  removeTask(name, i) {
    var tasks = this.state.tasks.slice();
    tasks.splice(i, 1);
    this.setState({
      tasks
    });
  }

  render() {
    return (
      <div>
        
        <form onSubmit={this.addTask}>
          <input type="text" className="input-todo" name="todoText" id="todo-text" placeholder="TODO List" ref="newTask" />
          <input type="submit" className="submit-todo" />
        </form>
        <TodoList entries={this.state.tasks} removeTodo={this.removeTask} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app container">
        <div className="header">
             <h3>TODO List</h3>
        </div>
        <Todos />
      </div>
    );
  }
}

const element = <App />;

ReactDOM.render(element, document.getElementById("root"));

