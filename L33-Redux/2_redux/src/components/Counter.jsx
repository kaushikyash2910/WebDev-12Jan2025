import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../actions/CounterActions";

const Counter = () => {
  const counterState = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incrementCounter())}>+</button>
      {counterState}
      <button onClick={() => dispatch(decrementCounter())}>-</button>
    </div>
  );
};

export default Counter;
