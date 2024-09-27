import React, { useState } from 'react';
import TodoList from './TodoList'; // Import the TodoList component

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoText, isComplete: false }]);
      setTodoText('');
    }
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: true } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    if (newText) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app-container">
      {/* Left side: Input box */}
      <div className="input-container">
        <h2>Add New Todo</h2>
        <div className="todo-input-container">
          <input
            type="text"
            placeholder="Add a new todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>
      </div>

      {/* Right side: Todo list */}
      <div className="todo-list-container">
        <h2>Your Todos</h2>
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
