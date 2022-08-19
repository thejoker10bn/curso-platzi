import React from 'react';
import { TodoContext } from '../Context/TodoContext';
import './TodoCounter.css';

function TodoCounter (){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className='TodoCounter'
        >Haz completado {completedTodos}  de {totalTodos} todo's</h2>
    );
}

export { TodoCounter };