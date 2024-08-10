import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/features/feature'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import TopOnebox from './components/TopOnebox'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const Navigate = useNavigate();
  
  const queryParams = new URLSearchParams(location.search);
  // let to const token
  let token = queryParams.get("token");
  const localStorageToken = localStorage.getItem("token")
  //productionchange
  token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoia2FydGlrYXlhLmt1bDA5MDhAZ21haWwuY29tIiwiaWQiOjUwNiwiZmlyc3ROYW1lIjoiS2FydGlrYXlhIiwibGFzdE5hbWUiOiJLdWxzaHJlc3RoYSJ9LCJpYXQiOjE3MjMyODU3ODMsImV4cCI6MTc1NDgyMTc4M30.o_BmQHlIKF0_74-IeR58AM4aPAxmLZBKRU7WVA7SnL0"
  
  useEffect(() => {
    if (!token && !localStorageToken) {
      Navigate("/login");
    }
  }, [token,localStorageToken]);
  return (
    <div>
      <TopOnebox />
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