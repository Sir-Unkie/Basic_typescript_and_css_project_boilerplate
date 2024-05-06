import { RequestStatus } from '@shared/constants';

export interface GenericState<T = null> {
  data: T | null;
  dataRequestStatus: RequestStatus;
}
