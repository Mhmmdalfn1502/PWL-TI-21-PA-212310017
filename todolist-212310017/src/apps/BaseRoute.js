// BaseRoute.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TodoInput from "../components/TodoInput";
import List from "../components/List";

export default function BaseRoute() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<List todos={todos} setTodos={setTodos} />}
      />
      <Route
        path="TodoInput"
        element={<TodoInput addTodo={addTodo} />}
      />
    </Routes>
  );
}
