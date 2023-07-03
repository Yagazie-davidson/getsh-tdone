import { useContext, useEffect } from "react";
import "./App.css";
import { fetchRequest } from "./service/fetch";
import AddTask from "./components/AddTask";
import TodoContext from "./context/TodoContext";

function App() {
  const { listTask, getTask } = useContext(TodoContext);
  useEffect(() => {
    getTask();
  });

  // Delete a task
  const deleteTask = async (id) => {
    const payload = { todoIdFromJSFile: id };
    const data = await fetchRequest("todos/deleteTodo", "DELETE", payload);
    console.log(data);
    getTask(); //Re-render the Todos component
  };

  return (
    <>
      <h1>Get Sh!t Done</h1>
      {/* Display all task */}
      <div className="">
        {listTask &&
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
                  <span onClick={() => deleteTask(item._id)}>Delete</span>
                </div>
              </div>
            );
          })}
      </div>
      <AddTask />
    </>
  );
}

export default App;
