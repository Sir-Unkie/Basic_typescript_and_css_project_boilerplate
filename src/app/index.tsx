import { Provider } from 'react-redux';

import { CountWidget } from '@widgets/counter';

import { store } from './reduxProvider/index';

import './globalCss/reset.css';
import './globalCss/fonts.css';

// TODO zhdi:
// 1. Add Radix library for UI components
// 2. Add Router
// 3. Migrate to feature-based architecture
// 4. Update all dependencies
// 5. Migrate to TSC

export const App = () => (
  <Provider store={store}>
    <CountWidget />
  </Provider>
);
