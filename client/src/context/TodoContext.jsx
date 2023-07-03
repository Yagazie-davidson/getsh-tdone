import { createContext, useState } from "react";
import { getTodos } from "../service/fetch";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [listTask, setListTask] = useState(null);
  // Get all todo
  const getTask = async () => {
    const data = await getTodos();
    setListTask(data);
    console.log(data);
  };
  return (
    <TodoContext.Provider value={{ listTask, getTask }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
