// TodoInput.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoInput = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText); // Menambahkan todo ke state di komponen yang lebih tinggi
    navigate("/"); // Mengarahkan pengguna kembali ke halaman List
  };

  return (
    <div className="p-5">
      <h1>Todo Input</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="Add Todo..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default TodoInput;
