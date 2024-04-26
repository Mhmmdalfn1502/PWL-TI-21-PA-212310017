import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";

const List = ({ todos, setTodos }) => {
  const [completed, setCompleted] = useState([]);
  const handelDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleCheck = (index) => {
    setCompleted([...completed, index]);
  };

  const isChecked = (index) => {
    return completed.includes(index);
  };

  const navigate = useNavigate();

  const handleAddNewTask = () => {
    // Redirect ke halaman TodoInput saat tombol "Add new Task" diklik
    navigate("/TodoInput");
  };

  return (
    <div className="p-5 d-flex row flex-wrap justify-content-center align-items-center text-center">
      <h1>Todo List</h1>
      <form>
        <div className="d-flex col">
        <input className="form-control" placeholder="Search..." />
        <button class="button-search task-button">
            <FontAwesomeIcon icon={faSearch} />
        </button>
        </div>
        <div className="pt-3">
          <button className="btn btn-primary col-12" onClick={handleAddNewTask}>
            Add new Task
          </button>
        </div>
      </form>
      <div className="pt-3">
        <button className="btn btn-primary col-4">All</button>
        <button className="btn btn-primary col-4">Done</button>
        <button className="btn btn-primary col-4">Todo</button>
      </div>
      <div className="py-3">
        {todos.map((todo, index) => (
          <div className="d-flex justify-content-between p-2 border border-1 rounded-2 mb-2">
            <li style={{ listStyle: "none" }} key={index}>
                <span style={{ textDecoration: isChecked(index) ? 'line-through' : 'none'}}>
              {index + 1}. {todo} {}
              </span>
            </li>
            <div className="d-flex gap-2">
              <button className="button-check task-button" onClick={() => handleCheck(index)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button className="button-edit task-button">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="button-complete task-button" onClick={() => handelDelete(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <button className="btn btn-danger col-6">Delete done task</button>
        <button className="btn btn-danger col-6">Delete all task</button>
      </div>
    </div>
  );
};

export default List;
