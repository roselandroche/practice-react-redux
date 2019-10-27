export const ADD_TO_DO = 'ADD_TO_DO';

export const addToDo = (toDo) => {
    return {
        type: ADD_TO_DO,
        payload: toDo
    }
}

export const COMPLETE_TO_DO = 'COMPLETE_TO_DO';

export const completeToDo = (toDo) => {
    return {
        type: COMPLETE_TO_DO,
        payload: toDo
    }
}

export const CLEAR_TO_DO = 'CLEAR_TO_DO';

export const CLEAR_TO_DO = (toDo) => {
    return {
        type: CLEAR_TO_DO,
        payload: toDo
    }
}