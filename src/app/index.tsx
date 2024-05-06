import { Provider } from 'react-redux';

import { CounterCard } from '@features/counter-card';

import { store } from './reduxProvider/index';

import './globalCss/reset.css';
import './globalCss/fonts.css';

// TODO zhdi:
// 4. Add Router
// 5. Add CN library and create one conditionaly disabled element
// const buttonClass = classNames(styles.btn, {
//   [styles['btn-primary']]: primary,
//   [styles['btn-secondary']]: !primary
// });

// 6. Add lefthook and set it up
// 7. Migrate to TSC
// 8. Add Styled Components
// 9. Add Radix dependency for UI components

export const App = () => (
  <Provider store={store}>
    <CounterCard />
  </Provider>
);
