import { useDispatch, useSelector } from "react-redux";
import "./counter.css";
import {
  counterSelector,
  decrement,
  increment,
  incrementByAmount,
} from "./store/slice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  //   const count = useSelector();
  console.log("count", count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1 className="counter-header">Counter</h1>
      <p className="counter-number">Count: {count}</p>
      <div className="counter-actions">
        <button
          onClick={() => dispatch(increment())}
          className="counter-increment"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="counter-decrement"
        >
          -
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="counter-custom-increment"
        >
          + 5
        </button>
      </div>
    </div>
  );
};
