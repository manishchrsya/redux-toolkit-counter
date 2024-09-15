import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./timer.css";
import {
  startTimerThunk,
  stopTimerThunk,
  resetTimerThunk,
} from "./store/slice";

export const Timer = () => {
  const { timer, isRunning } = useSelector((state) => state.timer.value);
  const dispatch = useDispatch();

  const timerRef = useRef(null);

  const handleStartCallback = () => {
    if (isRunning) {
      dispatch(stopTimerThunk(timerRef));
    } else {
      dispatch(startTimerThunk(timerRef));
    }
  };

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={handleStartCallback}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => dispatch(resetTimerThunk(timerRef))}>Reset</button>
    </div>
  );
};
