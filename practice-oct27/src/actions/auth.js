import { reducer } from "../reducers/toDo";
import axios from "axios";

export const CAT_START = 'CAT_START';
export const CAT_SUCCESS = 'CAT_SUCCESS';
export const CAT_FAILURE = 'CAT-FAILURE';

export const register = (credentials) => (dispatch) => {
    dispatch({ type: CAT_START })

    axios
        .post('https://be-partyplanner.herokuapp.com/auth/register', credentials)
        .then(res => {
            console.log(res.data)
            dispatch({ type: CAT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
            dispatch({ type: CAT_FAILURE, payload: err.response })
        })
}

