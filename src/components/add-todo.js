import React, {useState} from 'react';

const AddTodo = ({addTodo}) => {
  const [value, setValue] = useState("")
  const handleClick = () => {
    addTodo(value)
    setValue('')
  }
  return (
    <div className='add-todo'>
      <input value={value} onChange={(e) => setValue(e.target.value) } type="text" />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default AddTodo;