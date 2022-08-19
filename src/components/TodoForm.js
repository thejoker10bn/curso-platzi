import React from 'react';
import { TodoContext } from '../Context/TodoContext';
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setnewTodoValue] = React.useState('');
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    
    const onChange = (event) => {
        setnewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();   
        addTodo(newTodoValue); 
        setOpenModal(false);
        setnewTodoValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
                <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='cortar la cebolla' />
            <div className='TodoForm-buttonContainer'>
                <button
                type='button'
                className='TodoForm-button TodoForm-button--cancel'
                onClick={onCancel}>Cancelar</button>
                <button
                type='submit'
                className='TodoForm-button TodoForm-button--add'>Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}