import HandlerButtons from "./Components/Button/button"
import { useState } from "react";
function App() {
  
  const labels = ["ADD", "SUBSTRACT", "CLEAR"]

  const [count, setCount] = useState(0);
    
    const Clear=()=>{
        setCount(0);
    }
    const Substract=()=>{
        setCount(count-1);
    }
    const Add=()=>{
        setCount(count+1)
    }
  return (
    <>
    <h1>{count}</h1>
    <div className="div_main">
      <HandlerButtons label={labels[0]} clickHandler={Add}></HandlerButtons>
      <HandlerButtons label={labels[1]} clickHandler={Substract}></HandlerButtons>
      <HandlerButtons label={labels[2]} clickHandler={Clear}></HandlerButtons>
    </div>
    </>
  )
}

export default App
