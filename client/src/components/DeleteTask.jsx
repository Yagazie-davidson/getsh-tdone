import { useContext } from "react";
import { fetchRequest } from "../service/fetch";
import TodoContext from "../context/TodoContext";

function DeleteTask({ id }) {
  const { getTask } = useContext(TodoContext); //Use the getTask function from useContext to fetch new data after state update

  // Delete a task
  const deleteTask = async (id) => {
    const payload = { todoIdFromJSFile: id };
    const data = await fetchRequest("todos/deleteTodo", "DELETE", payload);
    console.log(data);
    getTask();
  };
  return (
    <>
      <span onClick={() => deleteTask(id)}>Delete</span>
    </>
  );
}

export default DeleteTask;
