'use client';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onClickHandler = () => setCount((prevValue) => prevValue + 1);

  return <button onClick={onClickHandler}>{count}</button>;
};

export default Counter;
