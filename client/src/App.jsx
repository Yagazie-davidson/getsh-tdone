import "./App.css";
import AddTask from "./components/AddTask";
import GetAllTask from "./components/GetAllTask";

function App() {
  return (
    <>
      <h1>Welcome back, User</h1>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-3xl mb-10">
          Get <span className="text-violet-500">Sh!t</span> Done
        </h1>
        {/* Display all task */}
        <GetAllTask />
        {/* Add New Task */}
        <AddTask />
      </div>
    </>
  );
}

export default App;
