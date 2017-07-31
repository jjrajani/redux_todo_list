import { combineReducers } from 'redux';

import {
  visibilityFilter,
  todos
} from './todo_reducers';

const app = combineReducers({
  visibilityFilter,
  todos
});

export default app
