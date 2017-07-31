import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  visibilityFilter,
  todos
} from './todo_reducers';

const app = combineReducers({
  visibilityFilter,
  todos,
  form: formReducer
});

export default app
