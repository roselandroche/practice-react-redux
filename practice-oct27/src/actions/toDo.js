export const ADD_TO_DO = 'ADD_TO_DO';

export const addToDo = (toDo) => {
    return {
        type: ADD_TO_DO,
        payload: toDo
    }
}

export const TOGGLE_TO_DO = 'TOGGLE_TO_DO';

export const toggleToDo = (id) => {
    console.log(id)
    return {
        type: TOGGLE_TO_DO,
        payload: id
    }
}

export const CLEAR_TO_DO = 'CLEAR_TO_DO';

export const clearToDo = (toDo) => {
    return {
        type: CLEAR_TO_DO,
        payload: toDo
    }
}