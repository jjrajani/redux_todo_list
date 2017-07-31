import React from 'react';
import { Footer, ContactPage } from './components';
import { AddTodo, VisibleTodoList } from './containers';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <ContactPage />
    <Footer />
  </div>
)

export default App;
