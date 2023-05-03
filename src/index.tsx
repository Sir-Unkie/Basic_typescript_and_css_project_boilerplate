import { createRoot } from 'react-dom/client';

import { FirstComponent } from '@shared';

// Render your React component instead
const rootDiv = document.getElementById('root');
const func = () => 'qweqwe';

const root = rootDiv && createRoot(rootDiv);
root?.render(
  <FirstComponent
    isVisible
    value={'qweqwe'}
    callback={func}
  />,
);
