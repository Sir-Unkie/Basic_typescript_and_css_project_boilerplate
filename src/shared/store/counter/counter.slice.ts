import { createSlice } from '@reduxjs/toolkit';

import { RequestStatus } from '@shared/constants';
import { GenericState } from '@shared/types';

const initialState: GenericState<number> = {
  data: null,
  dataRequestStatus: RequestStatus.idle,
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
  extraReducers: (_builder) => {},
});

export const { increment, decrement } = counterSlice.actions;
