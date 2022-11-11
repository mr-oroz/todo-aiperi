import React, {useState} from 'react';
import AddTodo from './components/add-todo';
import Header from './components/header'
import List from './components/list';
import uniqid from 'uniqid';
const App = () => {
  const [task, setTask] = useState([])
  const addTodo = (value) => {
    const newItem = {
      title: value,
      completed: false,
      id: uniqid()
    }
    
    const newArr = [...task, newItem]
    setTask(newArr)
  }

  const removeItem = (id) => {
    setTask(() => task.filter(item => item.id !== id ))
  }

  return (
    <div className='App'>
      <Header length={task.length}/>
      <AddTodo addTodo={addTodo}/>
      <List removeItem={removeItem} task={task}/>
    </div>
  );
};

export default App;