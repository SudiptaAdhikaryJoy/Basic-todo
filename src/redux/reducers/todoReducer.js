import * as Types from "./../types/todoType";

const initialState = {
    todoList: [],

    isLoading: false,
    todoInput: {
        task: "",
        assignTo: "",
        priority: "",
        estimatedTime: "",

    },
    editIndex: null
}

export const todoReducer = (state = initialState, action) =>{
    switch(action.type){
        case Types.CHANGE_TODO_INPUT:
            return {
               ...state,
                todoInput: {...state.todoInput, [action.payload.name]: action.payload.value}
            }
        case Types.STORE_TODO:
            return {
               ...state,
               todoInput: initialState.todoInput
            }
        case Types.GET_TODO_LIST:
            return {
                 ...state,
                todoList: action.payload
            }
        case Types.EDIT_TODO_LIST: 
        return  {
            ...state,
            todoInput: action.payload.data,
            editIndex: action.payload.index
    
        }
        case Types.UPDATE_TODO_LIST:
            return {
                ...state,
                todoList: action.payload.data,
                todoInput: initialState.todoInput,
                editIndex: null
            }
        default:
            return initialState;
    }
}