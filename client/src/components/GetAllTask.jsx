import { useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";
import DeleteTask from "./DeleteTask";
function GetAllTask() {
  const { listTask, getTask } = useContext(TodoContext);

  useEffect(() => {
    getTask(); // fetch all task
  }, []);

  return (
    <>
      <div>
        {listTask && //map out the task list
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
                  <DeleteTask id={item._id} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default GetAllTask;
