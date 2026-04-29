// 1. We must import the useState 'hook' from React
import { useState } from 'react';

function Counter() {
  // 2. Set up the memory. 
  // 'count' is the current number. 
  // 'setCount' is the function we use to change the number.
  // (0) is the starting value.
  const [count, setCount] = useState(0);

  return (
    <div className="counter-game" style={{ border: '2px dashed #646cff', padding: '20px', margin: '20px 0', borderRadius: '8px' }}>
      <h2>Interactive Counter Game</h2>
      
      {/* 3. Display the current state variable */}
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Score: {count}</p>
      
      {/* 4. Use the setter function when the button is clicked */}
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        Add +1
      </button>
      
      <button onClick={() => setCount(0)}>
        Reset Game
      </button>
    </div>
  );
}

export default Counter;