import { Provider } from 'react-redux';

import { CountWidget } from '@widgets/counter';

import { store } from './reduxProvider/index';

import './globalCss/reset.css';
import './globalCss/fonts.css';

// TODO zhdi:
// 1. Add Radix library for UI components
// 2. Add Router
// 3. Add lefthook and set it up
// 4. Migrate to feature-based architecture
// 5. Update all dependencies
// 6. Migrate to TSC

export const App = () => (
  <Provider store={store}>
    <CountWidget />
  </Provider>
);
