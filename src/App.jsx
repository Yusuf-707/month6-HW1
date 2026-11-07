import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(60)
  const [step, setStep] = useState('')
  const [isRunning, setIsRunning] = useState(true)
  
  const handleChange = (e) => {
    setStep(e)
  }

  const handleDecrease = () => {
    if(step > 0){
      setCount(prevCount => Math.max(0, prevCount - step))
      setStep(0)
    }
  }
  const handleReset = () =>{
    setCount(60)
    setStep('')
    setIsRunning(true)
  }

  useEffect(()=>{
    if(count === 0) {
    setIsRunning(false)
  }
    if(isRunning == false) return;
    const timer = setInterval(()=>{
      setCount(prevCount => prevCount - 1)
    }, 1000)
    return ()=> clearInterval(timer)

  },[count, isRunning])
  return (
    <div>
      <h1>{count}</h1>
      <input type="number" value={step} onChange={e => handleChange(e.target.value)} name="" id="" />
      <button disabled={count === 0} onClick={()=> handleDecrease()}>Уменьшить</button>
      <button onClick={() => setIsRunning(!isRunning)}>Старт / Пауза</button>
      <button onClick={()=> handleReset()}>Сброс</button>
    </div>
  )
}

export default App
