import { useReducer, useState } from 'react';

// The reducer function gets access to the current state and the action
// Action is what is sent in the dispatch function

// The reducer function returns the new state
const reducer = (currentState, action) => {
  console.log(currentState, action);

  if (action.type === 'increment') return currentState + 1;
  else if (action.type === 'decrement') return currentState - 1;
  else if (action.type === 'setCount') return action.payload;
  // else return currentState;
};

function DateCounter() {
  // const [count, setCount] = useState(0);

  // useReducer
  // Takes in a reducer function and an INITIAL STATE
  // Returns the CURRENT STATE and a dispatch function
  // It returns the CURRENT STATE- just like useState()
  const [count, dispatch] = useReducer(reducer, 0);

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch(-1);
    // DISPATCH AN ACTION!
    // dispatch({ type: 'decrement', payload: -1 });
    dispatch({ type: 'decrement' });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // dispatch(1);
    // dispatch({ type: 'increment', payload: 1 });
    dispatch({ type: 'increment' });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
