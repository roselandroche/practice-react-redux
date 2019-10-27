import { CAT_START, CAT_SUCCESS, CAT_FAILURE } from '../actions/auth';
import { reducer } from './toDo';

const initialState = {
    isLoading: false,
    error: null,
    user: {}
}

export function authReducer(state = initialState, action) {
    switch(action.type) {
        case CAT_START:
            return {
                ...state,
                isLoading: true,
                error: null,
                user: {}
            }
        case CAT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                user: action.payload
            }
        case CAT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                user: {}
            }
        default: 
            return state;
    }
}