import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [todos, setTodos] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k"
  ]);
  const [currentTodos, setCurrentTodos] = useState([]);
  const [index, setIndex] = useState(3);

  const renderTodos = currentTodos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });
  const viewMoreTodo = () => {
    console.log("viewMoreTodo");
    setIndex(index + 3);
    setCurrentTodos(todos.slice(0, index));
  };

  useEffect(() => {
    if (todos.length > 3) {
      setCurrentTodos(todos.slice(0, index));
    }
  }, [index]);
  return (
    <div>
      <ul>{renderTodos}</ul>
      <button onClick={viewMoreTodo}>View more</button>
    </div>
  );
}
