import { useDispatch } from 'react-redux';

import { store } from '@app/reduxProvider';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
