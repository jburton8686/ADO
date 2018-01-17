import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

let nextTodoId = 0;

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: (id, text) => dispatch({ type: "ADD TODO", id, text }),
  removeTodo: id => dispatch({ type: "DELETE_TODO", id })
});

class App extends Component {
  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button onClick={() => { this.props.addTodo(nextTodoId++, this.input.value); this.input.value = '' }}>Add Todo</button>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}>{todo.text} --{todo.id}</li>)}
        </ul>
      </div >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);