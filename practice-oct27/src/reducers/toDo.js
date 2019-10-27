import { ADD_TO_DO, COMPLETE_TO_DO, CLEAR_TO_DO } from '../actions/toDo';

const initialState = {
    toDo: {
        name: 'Default Task',
        completed: false,
        id: Date.now()
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                toDo: {
                    name: action.payload.name,
                    ...state
                }
            }
        case COMPLETE_TO_DO: 
            return {
                ...state,
                toDo: {
                    completed: true,
                    ...state
                }
            }
    }
}