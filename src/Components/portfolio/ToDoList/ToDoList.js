import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./todolist.module.css";
import { ArrowBack, Home } from "@mui/icons-material";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") {
      alert("You must write something!");
      return;
    }
    setTodos([...todos, { text: inputValue, completed: false }]);

    setInputValue("");
  };
  const deleteTodo = (index, e) => {
    e.stopPropagation();
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
  return (
    <div className={s.box}>
      <div className={s.home}>
        <Link to={"/"}>
          <ArrowBack />
        </Link>
      </div>
      <div className={s.header}>
        <h2>My To Do List</h2> <br />
        <div className={s.title}>
          <input
            type="text"
            placeholder="Title..."
            value={inputValue}
            className={s.input}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <span className={s.addBtn} onClick={addTodo}>
            Add
          </span>
        </div>
      </div>
      <ul className={s.ul}>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`${s.li} ${todo.completed ? `${s.checked}` : ""}`}
            onClick={() => toggleTodo(index)}
          >
            {" "}
            {todo.text}
            <span className={s.close} onClick={(e) => deleteTodo(index, e)}>
              ×
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
