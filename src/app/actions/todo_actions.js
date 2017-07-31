import * as c from './todo_constants';

export function addTodo(text) {
  return { type: c.ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: c.TOGGLE_TODO, index}
}

export function deleteTodo(index) {
  return { type: c.DELETE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return { type: c.SET_VISIBILITY_FILTER, filter }
}
