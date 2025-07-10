import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'EDIT_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleEditTodo = (id, title) => {
    setEditId(id);
    setEditTitle(title);
  };

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      dispatch({
        type: 'EDIT_TODO',
        payload: { id: editId, title: editTitle },
      });
      setEditId(null);
      setEditTitle('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => handleToggleTodo(todo.id)}
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  {todo.title}
                </span>
                <button onClick={() => handleEditTodo(todo.id, todo.title)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
