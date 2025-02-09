// import { useReducer, useState } from 'react';
import { useReducer } from 'react';

// The reducer function gets access to the CURRENT STATE and an ACTION
// Action is what is sent in the dispatch function
// The REDUCER FUNCTION returns the new state
const countReducer = (currentState, action) => {
  // console.log(currentState, action);

  if (action.type === 'increment') return currentState + 1;
  else if (action.type === 'decrement') return currentState - 1;
  else if (action.type === 'setCount') return action.payload;
  // else return currentState;
};

const stepReducer = (currentState, action) => {};

function DateCounter() {
  // const [count, setCount] = useState(0);

  // useReducer
  // Takes in a REDUCER FUNCTION and an INITIAL STATE
  // Returns the CURRENT STATE and a DISPATCH FUNCTION
  // It returns the CURRENT STATE- just like useState()
  // const [count, dispatch] = useReducer(countReducer, 0);
  const [count, dispatchCount] = useReducer(countReducer, 0);

  // const [step, setStep] = useState(1);
  const [step, dispatchStep] = useReducer(stepReducer, 1);

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const onDecrementClick = function () {
    // dispatch(-1);
    // DISPATCH AN ACTION!
    // dispatch({ type: 'decrement', payload: -1 });
    dispatchCount({ type: 'decrement' });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const onIncrementClick = function () {
    // dispatch(1);
    // dispatch({ type: 'increment', payload: 1 });
    dispatchCount({ type: 'increment' });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatchCount({ type: 'setCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatchStep({ type: 'setStep', payload: Number(e.target.value) });
  };

  const onResetClick = function () {
    // setCount(0);
    // setStep(1);
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
        <button onClick={onDecrementClick}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={onIncrementClick}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
