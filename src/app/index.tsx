import { Provider } from 'react-redux';

import { CountWidget } from '@widgets/counter';

import { store } from './reduxProvider/index';

import './globalCss/reset.css';
import './globalCss/fonts.css';

export const App = () => (
  <Provider store={store}>
    <CountWidget />
  </Provider>
);
