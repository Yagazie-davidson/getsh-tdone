import { createContext, useState } from "react";
import { fetchRequest } from "../service/fetch";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [listTask, setListTask] = useState(null);
  const [loading, setLoading] = useState(false);
  // Get all todo
  const getTask = async () => {
    setLoading(true);
    const data = await fetchRequest("todos", "GET");
    setListTask(data);
    console.log(data);
    setLoading(false);
  };
  return (
    <TodoContext.Provider value={{ listTask, getTask, loading, setLoading }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
