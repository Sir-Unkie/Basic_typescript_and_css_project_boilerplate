import { RootState } from '@app/reduxProvider';

export const selectCount = (state: RootState): number | null =>
  state.counter.data;
