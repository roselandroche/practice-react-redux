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
                toDoList: [ ...state, {
                    name: action.payload.name,
                    ...state
                }]
            }
        case TOGGLE_TO_DO: 
            return {
                ...state,
                toDoList: {
                    completed: !action.payload.completed,
                    ...state
                }
            }
        case CLEAR_TO_DO:
            return {
                toDoList:
                    state.toDoList.filter(item => {
                        return !item.completed
                    })
            }
        default:
            return state;
    }
}
