import "./App.css";
import AddTask from "./components/AddTask";
import GetAllTask from "./components/GetAllTask";

function App() {
  return (
    <>
      <h1>Get Sh!t Done</h1>
      {/* Display all task */}
      <GetAllTask />
      {/* Add New Task */}
      <AddTask />
    </>
  );
}

export default App;
