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
      <div className="bg-[#ECEDF6] px-10 py-12 mx-72 rounded-lg">
        {loading ? (
          <p className="text-center">Loading...</p> // Loading state
        ) : (
          <div className="space-y-4">
            {listTask ? ( //map out the task list
              listTask.todos.map((item) => (
                <div key={item._id} className=" bg-white px-5 rounded-lg">
                  <div className="flex justify-between">
                    <div className="flex items-center">
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
                    </div>
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
          </div>
        )}
      </div>
    </>
  );
}

export default GetAllTask;
// ECEDF6
