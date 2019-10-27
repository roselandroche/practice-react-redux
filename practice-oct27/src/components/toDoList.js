import React, { useState } from 'react';

const TodoForm = () =>{
    const [newTodoItem, setNewTodoItem] = useState('');


    const handleChange = event => {
        setNewTodoItem(event.target.value)
    };

    return(
        
        <div className='todo-form'>
            <div className='todo-item'>
                <p> TODO ITEM </p>
                <button> Complete Todo </button>
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