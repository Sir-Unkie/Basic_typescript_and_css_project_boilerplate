import {
  configureStore,
  PreloadedState,
  EnhancedStore,
} from '@reduxjs/toolkit';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { rootReducer } from '@app/reduxProvider';

interface IRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<any>;
  store?: EnhancedStore;
}

export const render = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    ...renderOptions
  }: IRenderOptions = {},
) => {
  const Wrapper = ({ children }: { children: React.ReactElement }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
};

// export const HookWrapper = ({
//   preloadedState,
//   store = configureStore({ reducer: rootReducer, preloadedState }),
//   children,
// }: {
//   preloadedState?: PreloadedState<any>;
//   store?: EnhancedStore;
//   children: React.ReactNode;
// }) => <Provider store={store}>{children}</Provider>;

// export const RouterWrapper = ({ children }: { children: ReactNode }) => {
//   const history = createMemoryHistory();
//   return <Router history={history}>{children}</Router>;
// };

export * from '@testing-library/react';
