import { useState } from "react";
import "./CounterState.css"
function Counter() {
  const [count, setCount] = useState(0);
  return (
<>
  <h2>Task day 6</h2>
  <h4>Count: {count}</h4>
      <button className="Button"   onClick={() => setCount((c) => c + 1)}>+</button>
      <button className="Button"  onClick={() => setCount((c) => c - 1)}>-</button>
</>
  );
}
export default CounterState