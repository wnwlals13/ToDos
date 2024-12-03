import { ChangeEvent, useState } from "react";
import styles from "./App.module.css";
import TodoList from "./components/lists/RegularList";
import TodoItems from "./components/todoItems/TodoItems";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [temp, setTemp] = useState<string>("");

  const handleSetTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTemp(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, temp]);
  };

  return (
    <div className={styles.app}>
      <header>
        <h2>뚜두뚜두두</h2>
      </header>
      <main>
        <section className={styles.inputSection}>
          <input onChange={handleSetTodo} type="text" />
          <button onClick={handleAddTodo}>작성</button>
        </section>
        <TodoList items={todos} sourceName="todo" ItemComponent={TodoItems} />
      </main>
    </div>
  );
}

export default App;
