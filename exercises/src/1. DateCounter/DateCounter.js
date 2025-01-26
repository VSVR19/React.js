import { useState } from "react";

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // const increaseStep = () => setStep((prevValue) => prevValue + 1);
  // const decreaseStep = () => setStep((prevValue) => prevValue - 1);

  const increaseCount = () => setCount((prevValue) => prevValue + step);
  const decreaseCount = () => setCount((prevValue) => prevValue - step);

  const onResetClickHandler = () => {
    setStep(1);
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        {/* <button onClick={decreaseStep}>-</button> */}
        <input 
          type="range" 
          min='0' 
          max='10'
          value={step}
          onChange={(event) => {setStep(Number(event.target.value))}}
        ></input>
        <span>{` Step: ${step} `}</span>
        {/* <button onClick={increaseStep}>+</button> */}
      </div>

      <div>
        <button onClick={decreaseCount}>-</button>
        {/* <span>{` Count: ${count} `}</span> */}
        <input 
          type="number" 
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button onClick={increaseCount}>+</button>
      </div>

      <p>{`${count === 0 ? 'Today is' : `${count} day(s) from today is`}  ${date.toDateString()}`}</p>
      {
        (step !== 1 || count !== 0) &&
        <button onClick={onResetClickHandler}>Reset</button>
      }
    </>
  )  
};

export { DateCounter };