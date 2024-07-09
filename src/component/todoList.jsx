import { useDispatch, useSelector } from 'react-redux';
import { handleEditInput } from '../redux/actions/todoAction';

export default function TodoList() {
    const {todoList} = useSelector((state) => state.todoReducer); // Get the list of tasks from root reducer or store  by useSelector
const dispatch = useDispatch();

const handleEditInputList = (index) => {
    dispatch(handleEditInput(index))
}
  return (
    <div>
    <table border={1}>
      <thead>
        <tr>
          <th>SL</th>
          <th>Task</th>
          <th>Assign To</th>
          <th>Priority</th>
          <th>Estimate Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((task, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{task.task}</td>
            <td>{task.assignTo}</td>
            <td>{task.priority}</td>
            <td>{task.estimatedTime}</td>
            <td> <button className="cursor-pointer bg-green-600 p-1 rounded-md"  onClick={() => handleEditInputList(index)}>Edit</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  
  </div>
  )
}
