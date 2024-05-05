import { combineReducers } from '@reduxjs/toolkit';

import { counterSlice } from '@entities/count';

export const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
