import React, { useState } from 'react';
import { reducer, initialState } from '../reducers/toDo';
import { toggleToDo, addToDo, clearToDo } from '../actions/toDo';
import { connect } from 'react-redux';

const TodoForm = (props) =>{
    const [newTodoItem, setNewTodoItem] = useState('');


    const handleChange = event => {
        setNewTodoItem(event.target.value)
    };
    console.log(props)
    return(
        
        <div className='todo-form'>
            <div>
                {props.toDo.toDoList.map(item => {
                    return <div className='todo-item'>
                        <p>{item.name}</p>
                        <button onClick={() => toggleToDo(item.id)}>Completed</button>
                        {/* Target the specific item by passing it as a param to the actual function, which is inside a callback */}
                    </div>
                })}
            </div>
            <input
                className='todo-input'
                type='text'
                name='newTodoItem'
                value={newTodoItem}
                onChange={handleChange}
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

function mapStateToProps(state) {
    return {
        name: state.toDoList.name,
        toDo: state.toDoList
    }
}

const mapDispatchToProps = {
    addToDo,
    toggleToDo,
    clearToDo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);