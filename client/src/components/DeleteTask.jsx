import { useContext } from "react";
import { fetchRequest } from "../service/fetch";
import TodoContext from "../context/TodoContext";
import { AiOutlineDelete } from "react-icons/ai";

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
    <span className="bg-[#ECEDF6] p-1 rounded">
      <AiOutlineDelete
        className="cursor-pointer transition ease-in-out delay-75 hover:scale-125 duration-100"
        onClick={() => deleteTask(id)}
      />
    </span>
  );
}

export default DeleteTask;
