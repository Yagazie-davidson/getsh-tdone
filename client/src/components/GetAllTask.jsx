import { useContext, useEffect } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import TodoContext from "../context/TodoContext";
import DeleteTask from "./DeleteTask";
import { fetchRequest } from "../service/fetch";
function GetAllTask() {
  const { listTask, getTask, loading } = useContext(TodoContext);

  useEffect(() => {
    getTask(); // fetch all task
  }, []);

  // mark todo as completed
  const markAsCompleted = async (id) => {
    const payload = { todoIdFromJSFile: id };
    const { data } = await fetchRequest("todos/markComplete", "PUT", payload);
    console.log(data);
    getTask();
  };
  // mark todo as incompleted
  const markAsIncompleted = async (id) => {
    const payload = { todoIdFromJSFile: id };
    const { data } = await fetchRequest("todos/markIncomplete", "PUT", payload);
    console.log(data);
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
                    {item.completed ? (
                      <ImCheckboxChecked
                        onClick={() => markAsIncompleted(item._id)}
                      />
                    ) : (
                      <ImCheckboxUnchecked
                        onClick={() => markAsCompleted(item._id)}
                      />
                    )}

                    <DeleteTask id={item._id} />
                  </div>
                </div>
              ))
            ) : (
              <p>Nothing here, Add new task</p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default GetAllTask;
