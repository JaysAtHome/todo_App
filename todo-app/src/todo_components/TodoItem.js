import React, { useState } from 'react';

const TodoItem = ({ todo, completeTodo, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className={todo.isComplete ? 'completed' : ''}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button
            onClick={() => completeTodo(todo.id)}
            disabled={todo.isComplete || isEditing}
          >
            Complete
          </button>
          <button
            onClick={() => setIsEditing(true)}
            disabled={todo.isComplete || isEditing}
          >
            Edit
          </button>
          <button
            onClick={() => removeTodo(todo.id)}
            disabled={isEditing}
          >
            Remove
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
