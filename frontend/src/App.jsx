import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/features/counterSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const Navigate = useNavigate();
  
  
  
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  console.log(token,queryParams)
  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token]);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default App;