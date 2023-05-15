import { combineReducers } from '@reduxjs/toolkit';

import { counterSlice } from '@entities/count';

import { EReducersNames } from '@shared/constants';

export const rootReducer = combineReducers({
  [EReducersNames.COUNTER]: counterSlice.reducer,
});
