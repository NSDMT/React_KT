import React, { useState } from 'react';
import './App.css';
import muz from "./img/muz.png"
import ananas from "./img/ananas.png"
import ayva from "./img/ayva.png"
import ejder from "./img/ejder.png"


function Todo() {
  const meyveler = [{ id: 1, name: muz }, { id: 2, name: ananas }, { id: 3, name: ayva }, { id: 4, name: ejder }]


  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  // const [image, setImage] = useState()
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (title && description) {
      if (editingIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = { title, description, price, stock };
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, { title, description, price, stock }]);

      }
      setTitle('');
      setDescription('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setEditingIndex(index);
    const taskToEdit = tasks[index];
    setTitle(taskToEdit.title);
    setDescription(taskToEdit.description);
    setPrice(taskToEdit.price)
    setStock(taskToEdit.stock)
  };

  return (
    <div className='container'>

      <div className="row mt-5 py-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className='border p-5'>
            <h1>Task List</h1>

            {/* <select name="" id="">
              <option value="">muz</option>
              <option value="">ananas</option>
              <option value="">ayva</option>
              <option value="">ejder</option>
            </select> */}
            <input
              className='form-control my-4'
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className='form-control'
              type='text'
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className='form-control'
              type='number'
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              className='form-control'
              type='number'
              placeholder="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <button className='btn btn-primary m-4' onClick={addTask}>
              {editingIndex !== null ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className='container'>
        <div className='row gap-3 justify-content-center'>
          {tasks.map((task, index) => (
            <div style={{ borderRadius: "20px" }} className='border col-md-3 px-5 py-3' key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              {/* <img src={task.image} alt="" /> */}
              <p>Fiyat: {price}</p>
              <p>Stok: {stock}</p>
              <button className='btn btn-danger mx-3' onClick={() => removeTask(index)}>Remove</button>
              <button className='btn btn-warning mx-3' onClick={() => editTask(index)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
