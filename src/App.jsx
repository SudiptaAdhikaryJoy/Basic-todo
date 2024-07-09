import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeTodoInput, handleGetTodos, handleStoreTodos, handleUpdate } from "./redux/actions/todoAction";
import TodoList from "./component/todoList";

function App() {

  const dispatch = useDispatch();
  const {todoInput, editIndex,todoList} = useSelector((state) => state.todoReducer); 
  console.log('editIndex', editIndex)// Get the list of tasks from root reducer or store  by useSelector
  useEffect(() => {
    dispatch(handleGetTodos())
  }, [dispatch]);

  const handleInputChange = (e) => {
    dispatch(handleChangeTodoInput(e.target.name, e.target.value))
  }
  
  const handleSubmitButton = (e) => {
    e.preventDefault()
    if (editIndex !== null) {
      dispatch(handleUpdate(editIndex, todoInput));
    } else {
      dispatch(handleStoreTodos(todoInput));
    }
  };

  return (
    <div className="todo_area">
      <div className=" flex justify-center items-center gap-1 ">
        <form>
          <label htmlFor="taskInput">Todo Task</label>
          <input
            id="taskInput"
            type="text"
            name="task"
            placeholder="add your task"
            value={todoInput.task}
            onChange={handleInputChange}
          />
          {/* assign */}
          <label htmlFor="assign">Assign:</label>

          <select name="assignTo" id="assign" value={todoInput.assignTo} onChange={handleInputChange} >
            <option value="siam">Siam</option>
            <option value="sudipta">Sudipta</option>
            <option value="foyez">foyez</option>
          </select>
          {/* priority */}
          <label htmlFor="priority">Priority:</label>

          <select name="priority" id="priority" value={todoInput.priority} onChange={handleInputChange}>
            <option value="high">high</option>
            <option value="low">low</option>
            <option value="avg">avg</option>
            <option value="below">below</option>
          </select>
          {/* Estimated Date */}
          <label htmlFor="estimatedTime">Estimated time (Minutes)</label>
          <input type="text" id="estimatedTime" name="estimatedTime" value={todoInput.estimatedTime} onChange={handleInputChange} />
          <button type="button" onClick={handleSubmitButton}>{editIndex !== null ? "Update" : "Submit"}</button>
        </form>
      </div>

      {/* Task View List  */}
     <TodoList/>
    </div>
  );
}

export default App;
