import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    value: {
      timer: 0,
      isRunning: false,
    },
  },
  reducers: {
    resetTimer: (state) => {
      state.value.timer = 0;
      state.value.isRunning = false;
    },
    stopTimer: (state) => {
      state.value.isRunning = false;
    },
    startTimer: (state) => {
      state.value.isRunning = true;
    },
    incrementTimer: (state) => {
      state.value.timer += 1;
    },
  },
});

const { resetTimer, startTimer, stopTimer, incrementTimer } =
  timerSlice.actions;

export const startTimerThunk = (timerRef) => (dispatch) => {
  timerRef.current = setInterval(() => {
    dispatch(incrementTimer());
  }, 1000);
  dispatch(startTimer());
};
export const stopTimerThunk = (timerRef) => (dispatch) => {
  if (timerRef.current) {
    clearInterval(timerRef.current);
  }
  dispatch(stopTimer());
};
export const resetTimerThunk = (timerRef) => (dispatch) => {
  if (timerRef.current) {
    clearInterval(timerRef.current);
  }
  dispatch(resetTimer());
};

export default timerSlice.reducer;
