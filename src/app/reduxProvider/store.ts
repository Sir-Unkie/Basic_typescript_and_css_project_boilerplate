import { createStore } from '@shared/lib';

import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer);
