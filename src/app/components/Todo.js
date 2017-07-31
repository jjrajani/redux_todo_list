import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, onTodoDelete}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <p onClick={onTodoDelete}>delete</p>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;
