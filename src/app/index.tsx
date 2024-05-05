import { Provider } from 'react-redux';

import { CountWidget } from '@widgets/counter';

import { store } from './reduxProvider/index';

import './globalCss/reset.css';
import './globalCss/fonts.css';

// TODO zhdi:
// 1. Update all dependencies
// 2. Migrate to feature-based architecture
// 3. Rename files so index doesnt containt component
// 4. Add Router
// 5. Add CN library and create one conditionaly disabled element
// const buttonClass = classNames(styles.btn, {
//   [styles['btn-primary']]: primary,
//   [styles['btn-secondary']]: !primary
// });

// 6. Add lefthook and set it up
// 7. Add Radix library for UI components
// 8. Migrate to TSC
// 9. Add Styled Components

export const App = () => (
  <Provider store={store}>
    <CountWidget />
  </Provider>
);
