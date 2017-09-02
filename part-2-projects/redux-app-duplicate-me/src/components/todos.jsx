import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../state/actions'

const Todos = ({ todos, dispatch }) => {
  function onTodoChange(e) {
    if (e.keyCode == 13){
      dispatch(addTodo(e.target.value))
      e.target.value = ''
    }
  };

  function onDeleteTodo(e, index) {
    dispatch(deleteTodo(index));
  }
  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <NewTodo onChange={onTodoChange}/>
      {todos.map((todo, index) => (
        <p key={index}>{todo} <button onClick={onDeleteTodo.bind(null, index)}
      >X</button></p>))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos)
