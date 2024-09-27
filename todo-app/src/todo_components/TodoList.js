import React from 'react';

const TodoList = ({ todos, completeTodo, editTodo, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos available. Add a todo to get started!</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span className={todo.isComplete ? 'completed' : ''}>{todo.text}</span>
            <div className="todo-buttons">
              <button onClick={() => completeTodo(todo.id)} disabled={todo.isComplete}>
                Complete
              </button>
              <button onClick={() => editTodo(todo.id, prompt('Edit todo:', todo.text))} disabled={todo.isComplete}>
                Edit
              </button>
              <button onClick={() => removeTodo(todo.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
