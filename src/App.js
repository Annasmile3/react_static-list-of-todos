import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos = todos.map(item => (
  {
    ...item,
    user: users.find(person => item.userId === person.id),
  }));

function App() {
  return (
    <TodoList todoList={preparedTodos} />
  );
}

export default App;
