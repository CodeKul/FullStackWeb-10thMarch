import React, { useReducer, useState } from "react";
function todoReducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todoList: [
          ...state.todoList,
          {
            todo: action.payload,
            completed:false
          },
        ],
      };
  }
}
function TodoList() {
  const [todoString, setTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
    
  });

  const handleSubmit = (e) => {
      e.preventDefault()
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
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default TodoList;
