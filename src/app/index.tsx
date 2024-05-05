import { Provider } from 'react-redux';

import { CountWidget } from '@widgets/counter';

import { store } from './reduxProvider/index';

import './globalCss/reset.css';
import './globalCss/fonts.css';

// TODO zhdi:
// 1. Update all dependencies
// 2. Add Router
// 4. Add lefthook and set it up
// 3. Add Radix library for UI components
// 5. Migrate to feature-based architecture
// 6. Migrate to TSC

export const App = () => (
  <Provider store={store}>
    <CountWidget />
  </Provider>
);
