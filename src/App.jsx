import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [taskData, setTaskData] = useState({
    task: "",
    assignTo: "",
    priority: "",
    estimatedTime: ""
  });
  const [tasks, setTasks] = useState([]);
  // console.log(tasks);
  // console.log(task);

  // const handleSubmitButton = () => {
  //     const getTasks = JSON.parse(localStorage.getItem("todos"));

  //     if (typeof getTasks !== 'undefined' && getTasks !== null && getTasks.length > 0) {
  //       const newArray = [...getTasks, task];
  //       setTasks(newArray);
  //       console.log("tasks", tasks);

  //       localStorage.setItem('todos', JSON.stringify(newArray));
  //     }else{
  //       localStorage.setItem("todos", JSON.stringify([task]))
  //     }
  // };

  /**
   * Todo List
   * task -> string -> input();
   * assignTo -> string; [Dropdown]
   * priority -> string -> [Dropdown];
   * estimatedTime -> string -> input();
   *
   */

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("todos")) || [];
    setTasks(storedTasks);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData(preData => ({
      ...preData, [name]: value
    }))
  }
  const handleSubmitButton = (e) => {
    e.preventDefault()
    if (taskData.task) {
      const updatedTasks = [...tasks, taskData];
      setTasks(updatedTasks);

      localStorage.setItem("todos", JSON.stringify(updatedTasks));

      setTaskData({
        task: "",
        assignTo: "",
        priority: "",
        estimatedTime: ""
      }); // Clear the input field after adding the task
    }
  };
  return (
    <div>
      <div className=" flex justify-center items-center gap-1 ">
        <form>
          <label htmlFor="taskInput">Todo Task</label>
          <input
            id="taskInput"
            type="text"
            name="task"
            placeholder="add your task"
            value={taskData.task}
            onChange={handleInputChange}
          />
          {/* assign */}
          <label htmlFor="assign">Assign:</label>

          <select name="assignTo" id="assign" value={taskData.assignTo} onChange={handleInputChange} >
            <option value="siam">Siam</option>
            <option value="sudipta">Sudipta</option>
            <option value="foyez">foyez</option>
          </select>
          {/* priority */}
          <label htmlFor="priority">Priority:</label>

          <select name="priority" id="priority" value={taskData.priority} onChange={handleInputChange}>
            <option value="high">high</option>
            <option value="low">low</option>
            <option value="avg">avg</option>
            <option value="below">below</option>
          </select>
          {/* Estimated Date */}
          <label htmlFor="estimatedTime">Estimated time</label>
          <input type="date" id="estimatedTime" name="estimatedTime" value={taskData.estimatedTime} onChange={handleInputChange} />
          <button type="button" onClick={handleSubmitButton}>Submit</button>
        </form>
      </div>
      <div>
      {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                Task: {task.task}, Assigned to: {task.assignTo}, 
                Priority: {task.priority}, Estimated Time: {task.estimatedTime}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks added</p>
        )}
      </div>
    </div>
  );
}

export default App;
