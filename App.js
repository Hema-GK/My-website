// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  // 
  const [count,setCounter]=useState(0)
  const addValue=()=>{
    // setCounter(count+1)
    // to avoid patching or to add 4 for each iteration we should add call back function
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)


  }
  // const[dec,setCounter]=useState(0)
  const decValue=()=>{
    setCounter(count-1)
  }

  
  return (
    <>
    <h1>first React project</h1>
    <h1>Count:{count}</h1>
    <button onClick={addValue}>Inc</button>{""}
    <button  onClick={decValue}>DEC</button>
    </>
  );
}

export default App;
