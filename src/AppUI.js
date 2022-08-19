import React from 'react';
// Importamos nuestro contexto
import { TodoContext } from './Context/TodoContext';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';


function AppUI() {
  const{
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
 
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      {/* Podemos acceder a nuestro contexto con el consumer */}
      
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

              {!!openModal && (
                <Modal> 
                <TodoForm />
              </Modal>
              )}

      <CreateTodoButton
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };