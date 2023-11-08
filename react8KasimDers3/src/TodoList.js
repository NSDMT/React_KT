import React, { useState } from 'react';
import './App.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    if (title && description) {
      setTasks([...tasks, { title, description }]);
      setTitle('');
      setDescription('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input

        type='text'
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className='button-add' onClick={addTask}>Add Task</button>
      <div className='container'>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4'>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <button className='button-remove' onClick={() => removeTask(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
