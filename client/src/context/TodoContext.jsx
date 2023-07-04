import { createContext, useState } from "react";
import { fetchRequest } from "../service/fetch";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [listTask, setListTask] = useState(null);
  // Get all todo
  const getTask = async () => {
    const data = await fetchRequest("todos", "GET");
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
