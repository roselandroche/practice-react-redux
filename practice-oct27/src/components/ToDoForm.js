import React, { useState } from 'react';
import { reducer, initialState } from '../reducers/toDo';

const TodoForm = () =>{
    const [newTodoItem, setNewTodoItem] = useState('');


    const handleChange = event => {
        setNewTodoItem(event.target.value)
    };

    return(
        
        <div className='todo-form'>
            <div>
                {state.toDoList.map(item => {
                    return <div className='todo-item'>
                        <p>item.name</p>
                        <button onClick={}>Completed</button>
                    </div>
                })}
            </div>
            <input
                className='todo-input'
                type='text'
                name='newTodoItem'
            />
            <button >
                Add New Todo
            </button>
            <button>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoForm;