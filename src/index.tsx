import { createRoot } from 'react-dom/client';

import { App } from '@app/index';

const rootDiv = document.getElementById('root');

const root = rootDiv && createRoot(rootDiv);
root?.render(<App />);
