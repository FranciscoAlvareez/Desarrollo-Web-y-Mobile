import HandlerButtons from "./Components/Button/button"
import { useState } from "react";
function App() {
  
  const labels = ["Mayor", "Acertaste", "Menor", "Reiniciar"]

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
  };

  const [count, setCount] = useState(randomNumberInRange(0, 100));
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  

  const Reiniciar=()=>{
    setMin(0);
    setMax(100);
    setCount(randomNumberInRange(0, 100));
  }
  const Menor=()=>{
    setMax(min-1);
    setCount(randomNumberInRange(min, count - 1));
  }
  const Mayor=()=>{
    setMin(max+1)
    setCount(randomNumberInRange(max, count + 1))
  }
  const Acerte=()=>{
  }
  return (
    <>
    <h1>{count}</h1>
    <div className="div_main">
      <HandlerButtons label={labels[0]} clickHandler={Mayor}></HandlerButtons>
      <HandlerButtons label={labels[1]} clickHandler={Acerte}></HandlerButtons>
      <HandlerButtons label={labels[2]} clickHandler={Menor}></HandlerButtons>
      <HandlerButtons label={labels[3]} clickHandler={Reiniciar}></HandlerButtons>
    </div>
    </>
  )
}

export default App
