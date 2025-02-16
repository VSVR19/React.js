import { useReducer } from 'react';

// The reducer function gets access to the CURRENT STATE and an ACTION
// Action is what is sent in the dispatch function
// The REDUCER FUNCTION returns the new state
const reducer = (currentState, action) => {
  console.log(currentState, action);

  return { count: 0, step: 1 };
};

function DateCounter() {
  const initialState = { count: 0, step: 1 };

  // useReducer takes in a REDUCER FUNCTION and an INITIAL STATE
  // Returns the CURRENT STATE and a DISPATCH FUNCTION
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const onDecrementClick = function () {
    dispatch({ type: 'decrement' });
  };

  const onIncrementClick = function () {
    dispatch({ type: 'increment' });
  };

  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {};

  const onResetClick = function () {};

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
