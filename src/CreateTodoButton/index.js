import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);
  // const handleClick = () => {
  //   setOpenModal(!openModal);
  // };

  return (
    <button
      className='CreateTodoButton'
      type='submit'
      onClick={() => setOpenModal(!openModal)}
      // onClick={handleClick}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
