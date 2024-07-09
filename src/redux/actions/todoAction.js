import * as Types from "./../types/todoType";

/**
 * 
 * @param {string} name 
 * @param {string or number} value 
 * @returns 
 */
export const handleChangeTodoInput = (name, value)=> (dispatch)=>{
    const data =  {
        name, value
    }
    dispatch({ type: Types.CHANGE_TODO_INPUT, payload: data})
}

export const handleStoreTodos = (todo) => (dispatch) => {
    const responseData = {
        isLoading: false,
        message: "Todo store successfully!"
    }
    setLocalStorage(todo)
    alert("Store successfully");
    dispatch(handleGetTodos())
    dispatch({ type: Types.STORE_TODO, payload: responseData})
};

export const handleGetTodos = () => (dispatch) => {
    const getTodo = getLocalStorage();
    dispatch({ type: Types.GET_TODO_LIST, payload: getTodo})
}



const getLocalStorage = ()=> {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
  }

export const setLocalStorage = (data)=> {
    const getData = getLocalStorage();
    const newTodos = [...getData, data]
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }


export const handleEditInput = (index) => (dispatch) => {
    const getList = getLocalStorage();
    const singleTodo = getList.find((todo,todoIndex) => todoIndex === index) 
  dispatch({ type: Types.EDIT_TODO_LIST, payload: {data: singleTodo, index: index}})
}

// export const handleUpdate = (index) => (dispatch) => {
//     const getList = getLocalStorage();
//     const updateEdit = [...getList ]
//     localStorage.setItem('todos', JSON.stringify(updateEdit));
//     dispatch({ type: Types.UPDATE_TODO_LIST, payload : {data: updateEdit, index: index}})
// }

export const handleUpdate = (updatedTodo, index) => (dispatch) => {
    const getList = getLocalStorage();
    const updateEdit = [...getList];
    updateEdit[index] = updatedTodo;
    localStorage.setItem('todos', JSON.stringify(updateEdit));
    dispatch({ type: Types.UPDATE_TODO_LIST, payload: { data: updateEdit, index: index }});
    dispatch(handleGetTodos()); // Refresh the list after update
}