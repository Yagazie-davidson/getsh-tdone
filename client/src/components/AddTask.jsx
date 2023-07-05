import { useContext, useState } from "react";
import { fetchRequest } from "../service/fetch";
import TodoContext from "../context/TodoContext";
import { getDate, getTime } from "../service/getDate";

function AddTask() {
  const [task, setTask] = useState("");
  const { getTask } = useContext(TodoContext); //Use the getTask Function from useContext to fetch new data after state update

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    const payload = { todoItem: task, date: getDate(), time: getTime() };
    const data = await fetchRequest("todos/createTodo", "POST", payload);
    console.log(data);
    getTask();
    setTask("");
  };

  return (
    <>
      {" "}
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
        <button
          onClick={addTask}
          className="bg-violet-500 hover:bg-violet-600 text-white px-5 py-2 mt-1 transition ease-in-out delay-150 hover:scale-110 duration-300"
        >
          Add a task
        </button>
      </div>
    </>
  );
}

export default AddTask;
