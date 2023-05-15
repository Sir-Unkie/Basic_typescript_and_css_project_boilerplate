import { rootReducer } from '@app/reduxProvider';

import { EDataRequestStatus } from '@shared/constants';

export type TRootState = ReturnType<typeof rootReducer>;

export interface IGenericStoreDataState<T = null> {
  data: T | null;
  dataRequestStatus: EDataRequestStatus;
}
