import React from 'react';
import { Footer } from './components';
import { AddTodo, VisibleTodoList, ContactPage } from './containers';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <ContactPage />
    <Footer />
  </div>
)

export default App;
