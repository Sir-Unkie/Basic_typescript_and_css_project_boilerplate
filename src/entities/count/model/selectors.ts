import { TRootState } from '@shared/types';

export const selectCount = (state: TRootState): number | null =>
  state.COUNTER.data;
