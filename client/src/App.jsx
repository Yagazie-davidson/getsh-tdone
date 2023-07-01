import { useEffect, useState } from "react";
import "./App.css";
// import Button from "./components/Button";
// import Input from "./components/Input";
import { fetchRequest } from "./service/fetch";

function App() {
  const [listTask, setListTask] = useState([]);
  const [task, setTask] = useState("");
  const getTask = async () => {
    const data = await fetchRequest("todos", "GET");
    setListTask(data);
    console.log(data);
  };
  useEffect(() => {
    getTask();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    const payload = { todoItem: task };
    const data = await fetchRequest("todos/createTodo", "POST", payload);
    console.log(data);
  };
  return (
    <>
      <h1>Get Sh!t Done</h1>
      {/* Display all task */}
      <div className="">
        {listTask.todos.length > 0 &&
          listTask.todos.map((item) => {
            return (
              <div key={item._id} className="flex items-center ">
                <input
                  placeholder="eg: Get eggs from the store"
                  type="text"
                  value={item.todo}
                  disabled
                  className={`mt-1 px-3 py-2 bg-white block sm:text-sm`}
                  aria-label="Input box for todos"
                />
                <div className=" flex  items-center space-x-2">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                  <span>Delete</span>
                </div>
              </div>
            );
          })}
      </div>
      {/* Add new task */}
      <div className="flex items-center space-x-4">
        <input
          placeholder="eg: Get eggs from the store"
          type="text"
          className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1`}
          aria-label="Input box for todos"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add a task</button>
      </div>
    </>
  );
}

export default App;
