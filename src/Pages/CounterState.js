import { useState } from "react";
import "./CounterState.css"
function CounterState() {
  const [count, setCount] = useState(0);
  return (
<>
  <h2>Task day 7</h2>
  <h4>Count: {count}</h4>
      <button className="Button"   onClick={() => setCount((c) => c + 1)}>+</button>
      <button className="Button"  onClick={() => setCount((c) => c - 1)}>-</button>
</>
  );
}
export default CounterState