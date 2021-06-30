import React, { useReducer, useState } from "react";
function todoReducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todoList: [
          ...state.todoList,
          {
            todo: action.payload,
            completed: false,
          },
        ],
      };
    case "strike-todo":
      //   {
      //     todoList:[
      //   {todo:"abc",completed:false},
      //   {todo:"qrwy",completed:false},
      //   {todo:"xyz",completed:true}
      // ]
      // }
      return {
        todoList: state.todoList.map((t, id) =>
          id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    default:
      return state;
  }
}
function TodoList() {
  const [todoString, setTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", payload: todoString });
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>

      {state.todoList.map((t, id) => (
        <li
          onClick={() => dispatch({ type: "strike-todo", payload: id })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.todo}
        </li>
      ))}
    </div>
  );
}

export default TodoList;
