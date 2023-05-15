import {
  AnyAction,
  Reducer,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { store } from '@app/reduxProvider';

import { isDevelopment } from '@shared/lib';

export const createStore = (
  rootReducer: Reducer<any, AnyAction> | ReducersMapObject<any, AnyAction>,
) =>
  configureStore({
    reducer: rootReducer,
    devTools: isDevelopment(),
  });

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
