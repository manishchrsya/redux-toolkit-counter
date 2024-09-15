import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../views/counter/store/slice";
import timerReducer from "../views/timer/store/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    timer: timerReducer,
  },
});
