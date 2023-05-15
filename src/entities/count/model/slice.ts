import { createSlice } from '@reduxjs/toolkit';

import { EDataRequestStatus } from '@shared/constants';
import { IGenericStoreDataState } from '@shared/types';

const initialState: IGenericStoreDataState<number> = {
  data: null,
  dataRequestStatus: EDataRequestStatus.idle,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.data = (state.data ?? 0) + 1;
    },
    decrement: (state) => {
      state.data = (state.data ?? 0) - 1;
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  extraReducers: (builder) => {},
});

export const { increment, decrement } = counterSlice.actions;

export type TCounterState = ReturnType<typeof counterSlice.reducer>;
