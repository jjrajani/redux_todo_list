import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './';

const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id} {...todo}
        onClick={() => onTodoClick(todo.id)}
        onTodoDelete={(e) => {
          console.log('first', todo)
          onTodoDelete(todo.id)
        }}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
}

export default TodoList
