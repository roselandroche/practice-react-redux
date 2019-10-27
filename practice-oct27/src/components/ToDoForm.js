import React, { useState } from 'react';
import { toggleToDo, addToDo, clearToDo } from '../actions/toDo';
import { connect } from 'react-redux';

const ToDoForm = (props) =>{
    const [newTodoItem, setNewTodoItem] = useState('');

    const handleChange = event => {
        setNewTodoItem(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newTask = {
            name: newTodoItem,
            completed: false,
            id: Date.now()
        }
        props.addToDo(newTask)
        setNewTodoItem('');
    }

    console.log(props)
    return(
        
        <div className='todo-form'>
            <div>
                {props.toDo.toDoList.map(item => {
                    return <div className='todo-item' key={item.id}>
                        <p onClick={() => props.toggleToDo(item.id)}>{item.name}</p>
                        {/* Target the specific item by passing it as a param to the actual function, which is inside a callback */}
                    </div>
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    className='todo-input'
                    type='text'
                    name='newTodoItem'
                    value={newTodoItem}
                    onChange={handleChange}
                />
                <button type='submit'>
                    Add New Todo
                </button>
                <button onClick={props.clearToDo}>
                    Clear Completed
                </button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
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
)(ToDoForm);