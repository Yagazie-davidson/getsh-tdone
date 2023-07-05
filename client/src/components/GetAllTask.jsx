import { useContext, useEffect } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import TodoContext from "../context/TodoContext";
import DeleteTask from "./DeleteTask";
import { fetchRequest } from "../service/fetch";
import EditTask from "./EditTask";
function GetAllTask() {
  const { listTask, getTask, loading } = useContext(TodoContext);

  useEffect(() => {
    getTask(); // fetch all task
  }, []);

  // mark todo as completed
  const markAsCompleted = async (id) => {
    const payload = { todoIdFromJSFile: id };
    await fetchRequest("todos/markComplete", "PUT", payload);
    getTask();
  };
  // mark todo as incompleted
  const markAsIncompleted = async (id) => {
    const payload = { todoIdFromJSFile: id };
    await fetchRequest("todos/markIncomplete", "PUT", payload);
    getTask();
  };

  return (
    <>
      <div>
        {loading ? (
          <p className="mb-10">Loading...</p> // Loading state
        ) : (
          <>
            {listTask ? ( //map out the task list
              listTask.todos.map((item) => (
                <div key={item._id} className="">
                  <div className="flex items-center ">
                    {item.completed ? (
                      <ImCheckboxChecked
                        className="cursor-pointer"
                        onClick={() => markAsIncompleted(item._id)}
                      />
                    ) : (
                      <ImCheckboxUnchecked
                        className="cursor-pointer"
                        onClick={() => markAsCompleted(item._id)}
                      />
                    )}
                    <input
                      placeholder="eg: Get eggs from the store"
                      type="text"
                      value={item.todo}
                      disabled
                      className={`mt-1 px-3 py-2 bg-white block sm:text-sm ${
                        item.completed ? "line-through" : "no-underline"
                      }`}
                      aria-label="Input box for todos"
                    />
                    <div className=" flex  items-center space-x-2">
                      <EditTask />
                      <DeleteTask id={item._id} />
                    </div>
                  </div>
                  {/* <p>
                    {" "}
                    Added
                    {item.date} at
                    {item.time}
                  </p> */}
                </div>
              ))
            ) : (
              <p className="px-3 py-2 sm:text-sm">Nothing here, Add new task</p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default GetAllTask;
