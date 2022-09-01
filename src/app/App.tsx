import React from "react";
import TodoForm from "../components/todoForm/TodoForm";
import TodoList from "../components/todoList/TodoList";
import style from "./app.module.scss";
function App() {
  return (
    <div className={style.main}>
      <div className={style.content}>
          <h1>TypeScript Todo List</h1>

        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
