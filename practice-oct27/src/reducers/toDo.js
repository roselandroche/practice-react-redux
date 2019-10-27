import { ADD_TO_DO, TOGGLE_TO_DO, CLEAR_TO_DO } from '../actions/toDo';

const initialState = {
    toDoList: [
        {
            name: 'Default Task',
            completed: false,
            id: Date.now()
        }
    ]   
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    action.payload
                ]
            }
        case TOGGLE_TO_DO: 
            const updatedTask = state.toDoList.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
            console.log('reducer called')
            return {
                ...state,
                toDoList: updatedTask
            }
        case CLEAR_TO_DO:
            const clearedTask = state.toDoList.filter(item => {
                return !item.completed
            })
            return {
                ...state,
                toDoList: clearedTask
            }
        default:
            return state;
    }
}
