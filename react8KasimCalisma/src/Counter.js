import React, { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <h1 className='col-6'>Counter App</h1>
      <div className="row">
        <div className="col-2">
          <button className="btn btn-primary" onClick={increment}>+</button>
        </div>
        <div className="col-2">
          <p className="badge bg-secondary">{count}</p>
        </div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
