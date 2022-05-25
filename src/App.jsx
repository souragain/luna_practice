import { useEffect, useState } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)
  toast.success("Hello world!");
  
  const countUp = ( ) => {
    setCount (prev => {
      return prev+1;
    });
    setABC('Hellow');
  }

  useEffect(() => {
    toast.success(count);
  }, {count, abc});

  return (
    <div id='App'>
      <ToastContainer></ToastContainer>
      <h1>{count}</h1>
      <input type="button" value="추가" onClick={countUp}></input>
    </div>
  )

}

export default App
