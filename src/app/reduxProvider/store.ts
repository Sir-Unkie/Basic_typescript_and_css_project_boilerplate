import { configureStore } from '@reduxjs/toolkit';

import { isDevelopment } from '@shared/utils';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment(),
});
